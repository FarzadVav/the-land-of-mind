import { Suspense } from "react";

import { NextPagePropsT } from "@/features/general/lib/general.types";
import MobileBar from "@/features/general/components/templates/mobileBar/MobileBar";
import ExperiencesCreateOrEditForm from "../../modules/experiencesCreateOrEditForm/ExperiencesCreateOrEditForm";

async function ExperiencesEditPage({ params }: NextPagePropsT) {
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
        <ExperiencesCreateOrEditForm experienceId={experienceId} isEditMode />
      </Suspense>
    </>
  )
}

export default ExperiencesEditPage;