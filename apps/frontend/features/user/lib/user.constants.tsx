import { ThemeT } from "./user.types";
import { ConstantT } from "@/features/general/lib/general.types";

export const THEMES: ConstantT<ThemeT>[] = [
  { name: "System", value: "system" },
  { name: "Light", value: "light" },
  { name: "Dark", value: "dark" }
];