import { Suspense } from "react";

import MobileBar from "@/features/general/components/templates/mobileBar/MobileBar";
import ExperiencesCreateOrEditForm from "@/features/experiences/components/modules/experiencesCreateOrEditForm/ExperiencesCreateOrEditForm";

function ExperiencesCreatePage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          New Experience
        </MobileBar.Title>

        <MobileBar.Link />
      </MobileBar>

      <Suspense>
        <ExperiencesCreateOrEditForm />
      </Suspense>
    </>
  )
}

export default ExperiencesCreatePage;