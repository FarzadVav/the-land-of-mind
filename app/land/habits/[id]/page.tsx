import { NextPagePropsT } from "@/types/app.types";
import MobileBar from "@/components/templates/MobileBar/MobileBar";
import NewAndEditHabitForm from "@/features/habits/components/NewAndEditHabitForm/NewAndEditHabitForm";

async function LandEditHabitPage({ params }: NextPagePropsT) {
  const p = await params;

  const habitId = +(p.id as string);

  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          Edit Habit
        </MobileBar.Title>

        <MobileBar.Link />
      </MobileBar>

      <NewAndEditHabitForm habitId={habitId} isEditMode />
    </>
  )
}

export default LandEditHabitPage;