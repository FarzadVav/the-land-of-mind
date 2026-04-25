import { Suspense } from "react";

import TodosTabs from "@/features/todos/components/modules/todosTabs/TodosTabs";
import MobileBar from "@/features/general/components/templates/mobileBar/MobileBar";

function TodosPage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          Todos
        </MobileBar.Title>
      </MobileBar>

      <Suspense>
        <TodosTabs />
      </Suspense>
    </>
  )
}

export default TodosPage;