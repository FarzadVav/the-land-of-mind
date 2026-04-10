import MobileBar from "@/features/general/components/templates/mobileBar/MobileBar";
import ExperiencesCategoriesPageCreateForm from "./ExperiencesCategoriesPageCreateForm";

function ExperiencesCategoriesPage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          Edit Experience
        </MobileBar.Title>

        <MobileBar.Link />
      </MobileBar>

      <ExperiencesCategoriesPageCreateForm />
    </>
  )
}

export default ExperiencesCategoriesPage;