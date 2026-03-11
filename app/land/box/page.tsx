import { UserCircleIcon } from "lucide-react";

import MobileBar from "@/components/templates/MobileBar/MobileBar";

function LandBoxPage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Link href={"/land/box/profile"} side="end">
          <UserCircleIcon className="element-icon-size" />
        </MobileBar.Link>

        <MobileBar.Title>
          Box
        </MobileBar.Title>
      </MobileBar>
    </>
  )
}

export default LandBoxPage;