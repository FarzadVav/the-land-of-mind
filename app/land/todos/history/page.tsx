import { Suspense } from "react";

import MobileBar from "@/components/templates/MobileBar/MobileBar";
import TodosTabs from "@/features/todos/components/modules/todosTabs/TodosTabs";

function LandTodosHistoryPage() {
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

export default LandTodosHistoryPage;