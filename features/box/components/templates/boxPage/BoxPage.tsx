import { Suspense } from "react";

import BoxPageTabs from "./BoxPageTabs";
import MobileBar from "@/features/general/components/templates/mobileBar/MobileBar";

function BoxPage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          Box
        </MobileBar.Title>

        <MobileBar.Link />
      </MobileBar>

      <Suspense>
        <BoxPageTabs />
      </Suspense>
    </>
  )
}

export default BoxPage;