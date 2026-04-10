import MobileBar from "@/components/templates/MobileBar/MobileBar";
import ExperiencesCategoriesForm from "@/features/experiences/components/templates/experiencesCategoriesForm/ExperiencesCategoriesForm";

function LandExperiencesCategoriesPage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          Edit Experience
        </MobileBar.Title>

        <MobileBar.Link />
      </MobileBar>

      <ExperiencesCategoriesForm />
    </>
  )
}

export default LandExperiencesCategoriesPage;