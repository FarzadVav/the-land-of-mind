import MobileBar from "@/components/templates/MobileBar/MobileBar";
import NewTodoForm from "@/features/todos/components/NewTodoForm/NewTodoForm";

function LandNewTodoPage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          New Todo
        </MobileBar.Title>

        <MobileBar.Link />
      </MobileBar>

      <NewTodoForm />
    </>
  )
}

export default LandNewTodoPage;