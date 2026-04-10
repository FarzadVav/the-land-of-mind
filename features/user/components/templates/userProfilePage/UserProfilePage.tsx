import MobileBar from "@/features/general/components/templates/mobileBar/MobileBar";

function UserProfilePage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          Profile
        </MobileBar.Title>

        <MobileBar.Link />
      </MobileBar>

      <div className="wrapper">
        User Profile Page
      </div>
    </>
  )
}

export default UserProfilePage;