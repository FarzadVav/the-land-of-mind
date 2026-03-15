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
          Edit Habit
        </MobileBar.Title>

        <MobileBar.Link />
      </MobileBar>

      <NewAndEditExperienceForm experienceId={experienceId} isEditMode />
    </>
  )
}

export default LandEditExperiencePage;