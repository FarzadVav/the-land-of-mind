import MobileBar from "@/features/general/components/templates/mobileBar/MobileBar";
import HabitsPageList from "@/features/habits/components/templates/habitsPage/HabitsPageList";

function HabitsPage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          Habits
        </MobileBar.Title>
      </MobileBar>

      <HabitsPageList />
    </>
  )
}

export default HabitsPage;