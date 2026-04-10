import { Suspense } from "react";

import MobileBar from "@/components/templates/MobileBar/MobileBar";
import NewAndEditExperienceForm from "@/features/experiences/components/modules/newAndEditExperienceForm/NewAndEditExperienceForm";

function LandNewExperiencePage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          New Experience
        </MobileBar.Title>

        <MobileBar.Link />
      </MobileBar>

      <Suspense>
        <NewAndEditExperienceForm />
      </Suspense>
    </>
  )
}

export default LandNewExperiencePage;