import { Suspense } from "react";

import { NextPagePropsT } from "@/types/app.types";
import MobileBar from "@/components/templates/MobileBar/MobileBar";
import NewAndEditExperienceForm from "@/features/experiences/components/NewAndEditExperienceForm/NewAndEditExperienceForm";

async function LandEditExperiencePage({ params }: NextPagePropsT) {
  const p = await params;

  const experienceId = +(p.id as string);

  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          Edit Experience
        </MobileBar.Title>

        <MobileBar.Link />
      </MobileBar>

      <Suspense>
        <NewAndEditExperienceForm experienceId={experienceId} isEditMode />
      </Suspense>
    </>
  )
}

export default LandEditExperiencePage;