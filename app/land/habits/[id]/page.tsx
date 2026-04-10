import { Suspense } from "react";

import { NextPagePropsT } from "@/types/app.types";
import MobileBar from "@/components/templates/MobileBar/MobileBar";
import NewAndEditHabitForm from "@/features/habits/components/modules/newAndEditHabitForm/NewAndEditHabitForm";

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

      <Suspense>
        <NewAndEditHabitForm habitId={habitId} isEditMode />
      </Suspense>
    </>
  )
}

export default LandEditHabitPage;