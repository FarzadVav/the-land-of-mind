import { Suspense } from "react";

import MobileBar from "@/features/general/components/templates/mobileBar/MobileBar";
import HabitsCreateOrEditForm from "@/features/habits/components/modules/habitsCreateOrEditForm/HabitsCreateOrEditForm";

function HabitsCreatePage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          New Habit
        </MobileBar.Title>

        <MobileBar.Link />
      </MobileBar>

      <Suspense>
        <HabitsCreateOrEditForm />
      </Suspense>
    </>
  )
}

export default HabitsCreatePage;