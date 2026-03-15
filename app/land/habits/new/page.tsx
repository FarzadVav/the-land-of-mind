import { Suspense } from "react";

import MobileBar from "@/components/templates/MobileBar/MobileBar";
import NewAndEditHabitForm from "@/features/habits/components/NewAndEditHabitForm/NewAndEditHabitForm";

function LandNewHabitPage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          New Habit
        </MobileBar.Title>

        <MobileBar.Link />
      </MobileBar>

      <Suspense>
        <NewAndEditHabitForm />
      </Suspense>
    </>
  )
}

export default LandNewHabitPage;