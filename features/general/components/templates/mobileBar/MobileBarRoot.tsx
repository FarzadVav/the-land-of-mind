import Link from "next/link";
import { UserIcon } from "lucide-react";
import { PropsWithChildren } from "react";

import RotueProtector from "../../modules/rotueProtector/RotueProtector";

function MobileBarRoot({ children }: PropsWithChildren) {
  return (
    <header className="wrapper sticky z-40 top-6 my-6">
      <div className="h-(--element-xl-size) bg-background/90 backdrop-blur-sm flex items-center rounded-full border-2 border-background-thin relative">
        <RotueProtector routes={["/land/profile"]}>
          <Link
            href={"/land/profile"}
            className="btn btn-ghost element-square-size element-rounded-full element-sm absolute right-3"
          >
            <UserIcon className="element-icon-size" />
          </Link>
        </RotueProtector>

        {children}
      </div>
    </header>
  )
}

export default MobileBarRoot;