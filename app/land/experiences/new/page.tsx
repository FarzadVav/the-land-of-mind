import MobileBar from "@/components/templates/MobileBar/MobileBar";
import NewAndEditExperienceForm from "@/features/experiences/components/NewAndEditExperienceForm/NewAndEditExperienceForm";

function LandNewExperiencePage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          New Experience
        </MobileBar.Title>

        <MobileBar.Link />
      </MobileBar>

      <NewAndEditExperienceForm />
    </>
  )
}

export default LandNewExperiencePage;