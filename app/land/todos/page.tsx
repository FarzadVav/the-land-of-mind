import { Suspense } from "react";

import MobileBar from "@/components/templates/MobileBar/MobileBar";
import TodosTabs from "@/features/todos/components/TodosTabs/TodosTabs";

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