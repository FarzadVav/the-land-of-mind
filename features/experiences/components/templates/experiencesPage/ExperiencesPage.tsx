import { Suspense } from "react";

import ExperiencesPageTabs from "./ExperiencesPageTabs";
import MobileBar from "@/features/general/components/templates/mobileBar/MobileBar";

function ExperiencesPage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          Experiences
        </MobileBar.Title>
      </MobileBar>

      <Suspense>
        <ExperiencesPageTabs />
      </Suspense>
    </>
  )
}

export default ExperiencesPage;