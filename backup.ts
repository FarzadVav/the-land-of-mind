import fs from "fs";
import path from "path";
import ignore from "ignore";
import archiver from "archiver";

const OUTPUT_ZIP = "the-land-of-mind_backup.zip";
const ROOT_DIR = process.cwd();
const GITIGNORE_PATH = path.join(ROOT_DIR, ".gitignore");

function loadIgnore(): ReturnType<typeof ignore> {
  const ig = ignore();
  if (fs.existsSync(GITIGNORE_PATH)) {
    const gitignoreContent = fs.readFileSync(GITIGNORE_PATH, "utf8");
    ig.add(gitignoreContent.split(/\r?\n/));
  }
  // Always ignore .git folder itself
  ig.add(".git");
  return ig;
}

function collectFiles(
  dir: string,
  ig: ReturnType<typeof ignore>,
  baseDir: string = ROOT_DIR
): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(baseDir, fullPath).replace(/\\/g, "/");

    // Skip if ignored (relative path from root)
    if (ig.ignores(relativePath)) continue;

    if (entry.isDirectory()) {
      files.push(...collectFiles(fullPath, ig, baseDir));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

async function main() {
  const ig = loadIgnore();

  const outputPath = path.join(ROOT_DIR, OUTPUT_ZIP);
  const outputStream = fs.createWriteStream(outputPath);
  const archive = archiver("zip", { zlib: { level: 9 } });

  outputStream.on("close", () => {
    console.log(`Created ${OUTPUT_ZIP} (${archive.pointer()} total bytes)`);
  });

  archive.on("warning", (err) => {
    if (err.code === "ENOENT") {
      console.warn(err);
    } else {
      throw err;
    }
  });

  archive.on("error", (err) => {
    throw err;
  });

  archive.pipe(outputStream);

  const files = collectFiles(ROOT_DIR, ig);

  for (const filePath of files) {
    const relativePath = path.relative(ROOT_DIR, filePath).replace(/\\/g, "/");
    archive.file(filePath, { name: relativePath });
  }

  await archive.finalize();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
