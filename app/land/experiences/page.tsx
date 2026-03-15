import MobileBar from "@/components/templates/MobileBar/MobileBar";
import ExperiencesList from "@/features/experiences/components/ExperiencesList/ExperiencesList";

function LandExperiencesPage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          Experiences
        </MobileBar.Title>
      </MobileBar>

      <ExperiencesList />
    </>
  )
}

export default LandExperiencesPage;