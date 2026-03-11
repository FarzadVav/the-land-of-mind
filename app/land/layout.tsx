import { PropsWithChildren } from "react";

import MobileNav from "@/components/templates/MobileNav/MobileNav";

function LandLayout({ children }: PropsWithChildren) {
  return (
    <>
      {children}
      <MobileNav />
    </>
  )
}

export default LandLayout;