import MobileBar from "@/components/templates/MobileBar/MobileBar";
import ExperiencesTabs from "@/features/experiences/components/ExperiencesTabs/ExperiencesTabs";

function LandExperiencesPage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          Experiences
        </MobileBar.Title>
      </MobileBar>

      <ExperiencesTabs />
    </>
  )
}

export default LandExperiencesPage;