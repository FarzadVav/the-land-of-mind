"use client";

import { PropsWithChildren } from "react";

import useActiveHref from "@/hooks/useActiveHref/useActiveHref";

type RotueProtectorPropsT = PropsWithChildren & {
  routes: string[];
}

function RotueProtector({ routes, children }: RotueProtectorPropsT) {
  const checkRoute = useActiveHref();
  const isRouteActive = routes.find(item => checkRoute(item));

  return isRouteActive ? null : children;
}

export default RotueProtector;