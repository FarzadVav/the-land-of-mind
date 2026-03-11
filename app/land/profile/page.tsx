import MobileBar from "@/components/templates/MobileBar/MobileBar";

function LandProfilePage() {
  return (
    <>
      <MobileBar>
        <MobileBar.Title>
          Profile
        </MobileBar.Title>

        <MobileBar.Link href={"/land/box"} />
      </MobileBar>

      <div className="wrapper">
        Page
      </div>
    </>
  )
}

export default LandProfilePage;