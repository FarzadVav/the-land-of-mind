import MobileBar from "@/components/templates/MobileBar/MobileBar";
import HabitsList from "@/features/habits/components/modules/habitsList/HabitsList";

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

export default LandHabitsPage;