import { Suspense } from "react";

import MobileBar from "@/features/general/components/templates/mobileBar/MobileBar";
import TodosCreateOrEditForm from "../../modules/todosCreateOrEditForm/TodosCreateOrEditForm";

function TodosCreatePage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          New Todo
        </MobileBar.Title>

        <MobileBar.Link />
      </MobileBar>

      <Suspense>
        <TodosCreateOrEditForm />
      </Suspense>
    </>
  )
}

export default TodosCreatePage;