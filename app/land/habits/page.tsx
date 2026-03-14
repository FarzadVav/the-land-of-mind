import MobileBar from "@/components/templates/MobileBar/MobileBar";
import HabitsList from "@/features/habits/components/HabitsList/HabitsList";

function LandHabitsPage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          Habits
        </MobileBar.Title>
      </MobileBar>

      <HabitsList />
    </>
  )
}

export default LandHabitsPage