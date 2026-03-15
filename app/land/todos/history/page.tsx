import MobileBar from "@/components/templates/MobileBar/MobileBar";
import TodosTabs from "@/features/todos/components/TodosTabs/TodosTabs";

function LandTodosHistoryPage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          Todos History
        </MobileBar.Title>

        <MobileBar.Link />
      </MobileBar>

      <TodosTabs historyMode />
    </>
  )
}

export default LandTodosHistoryPage;