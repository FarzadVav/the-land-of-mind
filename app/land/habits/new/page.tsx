import MobileBar from "@/components/templates/MobileBar/MobileBar";
import NewAndEditHabitForm from "@/features/habits/components/NewAndEditHabitForm/NewAndEditHabitForm";

function LandNewHabitPage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          New Habit
        </MobileBar.Title>

        <MobileBar.Link />
      </MobileBar>

      <NewAndEditHabitForm />
    </>
  )
}

export default LandNewHabitPage;