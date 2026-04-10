import { Suspense } from "react";

import MobileBar from "@/components/templates/MobileBar/MobileBar";
import ExperiencesTabs from "@/features/experiences/components/modules/experiencesTabs/ExperiencesTabs";

function LandExperiencesPage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          Experiences
        </MobileBar.Title>
      </MobileBar>

      <Suspense>
        <ExperiencesTabs />
      </Suspense>
    </>
  )
}

export default LandExperiencesPage;