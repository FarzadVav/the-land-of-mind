import { PropsWithChildren } from "react";

function MobileBarRoot({ children }: PropsWithChildren) {
  return (
    <header className="wrapper mt-6">
      <div className="h-(--element-xl-size) flex items-center rounded-full border-2 border-background-thin relative wrapper">
        {children}
      </div>
    </header>
  )
}

export default MobileBarRoot;