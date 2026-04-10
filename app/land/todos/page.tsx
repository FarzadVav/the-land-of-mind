import { Suspense } from "react";

import MobileBar from "@/components/templates/MobileBar/MobileBar";
import TodosTabs from "@/features/todos/components/modules/todosTabs/TodosTabs";

function LandTodosPage() {
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

export default LandTodosPage;