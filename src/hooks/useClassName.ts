import { useRouter } from "next/router";

import type { ActiveClass } from "./@types";

export function useClassName() {
  const router = useRouter();
  // TODO: rename this function
  const activeClass: ActiveClass = ({ href, className }) => {
    return router.asPath == href ? className : "";
  };

  return { activeClass };
}
