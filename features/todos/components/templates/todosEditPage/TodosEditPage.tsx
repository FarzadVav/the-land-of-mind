import { Suspense } from "react";

import { NextPagePropsT } from "@/features/general/lib/general.types";
import MobileBar from "@/features/general/components/templates/mobileBar/MobileBar";
import TodosCreateOrEditForm from "@/features/todos/components/modules/todosCreateOrEditForm/TodosCreateOrEditForm";

async function TodosEditPage({ params }: NextPagePropsT) {
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
        <TodosCreateOrEditForm todoId={todoId} isEditMode />
      </Suspense>
    </>
  )
}

export default TodosEditPage;