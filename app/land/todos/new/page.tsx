import { Suspense } from "react";

import MobileBar from "@/components/templates/MobileBar/MobileBar";
import NewAndEditTodoForm from "@/features/todos/components/NewAndEditTodoForm/NewAndEditTodoForm";

function LandNewTodoPage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          New Todo
        </MobileBar.Title>

        <MobileBar.Link />
      </MobileBar>

      <Suspense>
        <NewAndEditTodoForm />
      </Suspense>
    </>
  )
}

export default LandNewTodoPage;