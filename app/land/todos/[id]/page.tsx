import { Suspense } from "react";

import { NextPagePropsT } from "@/types/app.types";
import MobileBar from "@/components/templates/MobileBar/MobileBar";
import NewAndEditTodoForm from "@/features/todos/components/NewAndEditTodoForm/NewAndEditTodoForm";

async function LandEditTodoPage({ params }: NextPagePropsT) {
  const p = await params;

  const todoId = +(p.id as string);

  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          Edit Habit
        </MobileBar.Title>

        <MobileBar.Link />
      </MobileBar>

      <Suspense>
        <NewAndEditTodoForm todoId={todoId} isEditMode />
      </Suspense>
    </>
  )
}

export default LandEditTodoPage;