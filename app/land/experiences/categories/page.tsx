import MobileBar from "@/components/templates/MobileBar/MobileBar";
import ExperiencesCategoriesForm from "@/features/experiences/components/ExperiencesCategoriesForm/ExperiencesCategoriesForm";

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