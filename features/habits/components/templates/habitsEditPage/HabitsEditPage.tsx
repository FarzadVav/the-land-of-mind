import { Suspense } from "react";

import { NextPagePropsT } from "@/features/general/lib/general.types";
import MobileBar from "@/features/general/components/templates/mobileBar/MobileBar";
import HabitsCreateOrEditForm from "../../modules/habitsCreateOrEditForm/HabitsCreateOrEditForm";

async function HabitsEditPage({ params }: NextPagePropsT) {
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
        <HabitsCreateOrEditForm habitId={habitId} isEditMode />
      </Suspense>
    </>
  )
}

export default HabitsEditPage;