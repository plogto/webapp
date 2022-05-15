import type { ActiveClass } from "./@types";
import { useRouter } from "next/router";

export function useClassName() {
  const { asPath } = useRouter();
  // TODO: rename this function
  const activeClass: ActiveClass = ({ href, className }) => {
    return asPath == href ? className : "";
  };

  return { activeClass };
}
