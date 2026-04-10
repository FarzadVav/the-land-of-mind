import { Suspense } from "react";

import TodosTabs from "@/features/todos/components/modules/todosTabs/TodosTabs";
import MobileBar from "@/features/general/components/templates/mobileBar/MobileBar";

function TodosHistoryPage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          Todos History
        </MobileBar.Title>

        <MobileBar.Link />
      </MobileBar>

      <Suspense>
        <TodosTabs historyMode />
      </Suspense>
    </>
  )
}

export default TodosHistoryPage;