import { Suspense } from "react";

import MobileBar from "@/components/templates/MobileBar/MobileBar";
import AdvancedModeTodos from "@/features/todos/components/AdvancedModeTodos/AdvancedModeTodos";

function LandTodosPage() {
  const isAdvancedTodosMode = true;

  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          Todos
        </MobileBar.Title>
      </MobileBar>

      {isAdvancedTodosMode ? (
        <Suspense>
          <AdvancedModeTodos />
        </Suspense>
      ) : null}
    </>
  )
}

export default LandTodosPage;