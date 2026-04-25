import { PropsWithChildren } from "react";

import MobileNav from "@/features/general/components/templates/mobileNav/MobileNav";

function LandLayout({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <MobileNav />
    </>
  )
}

export default LandLayout;