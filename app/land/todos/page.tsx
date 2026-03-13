import Link from "next/link";
import { Suspense } from "react";
import { PlusIcon } from "lucide-react";

import MobileBar from "@/components/templates/MobileBar/MobileBar";
import TodosTabs from "@/features/todos/components/TodosTabs/TodosTabs";

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
          <TodosTabs />
        </Suspense>
      ) : null}

      <Link
        href={"/land/todos/new"}
        className="btn btn-soft element-rounded-full palette-primary mx-auto mt-6"
      >
        <span>New Todo</span>
        <PlusIcon className="element-icon-size" />
      </Link>
    </>
  )
}

export default LandTodosPage;