import { Suspense } from "react";

import BoxTabs from "@/features/box/components/modules/boxTabs/BoxTabs";
import MobileBar from "@/components/templates/MobileBar/MobileBar";

function LandBoxPage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          Box
        </MobileBar.Title>

        <MobileBar.Link />
      </MobileBar>

      <Suspense>
        <BoxTabs />
      </Suspense>
    </>
  )
}

export default LandBoxPage;