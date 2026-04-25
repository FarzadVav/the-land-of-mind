"use client";

import { usePathname } from "next/navigation";

function useActiveHref() {
  const pathname = usePathname();

  const checkHref = (href: string): boolean => {
    if (href === "/") {
      if (pathname === "/") {
        return true;
      }

      return false;
    }

    if (pathname.includes(href)) {
      return true;
    }

    return false;
  }

  return checkHref;
}

export default useActiveHref;
