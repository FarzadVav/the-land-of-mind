import { Suspense } from "react";

import MobileBar from "@/components/templates/MobileBar/MobileBar";
import TodosTabs from "@/features/todos/components/TodosTabs/TodosTabs";

function LandTodosPage() {
  const isAdvancedTodosMode = true;

  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          Todos History
        </MobileBar.Title>

        <MobileBar.Link />
      </MobileBar>

      {isAdvancedTodosMode ? (
        <Suspense>
          <TodosTabs historyMode />
        </Suspense>
      ) : null}
    </>
  )
}

export default LandTodosPage;