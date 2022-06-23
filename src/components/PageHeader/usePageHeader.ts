import { useCallback } from "react";
import { useRouter } from "next/router";
import { PageUrls } from "@enums/pages";
import { UsePageHeaderProps } from "./PageHeader.types";

export function usePageHeader(props: UsePageHeaderProps) {
  const { backLink } = props;
  const router = useRouter();
  const { back, push } = router;

  const handleBack = useCallback(() => {
    if (backLink) {
      push(backLink);
    } else if (window.history.length > 2) {
      back();
    } else {
      push(PageUrls.HOME);
    }
  }, [back, backLink, push]);

  return { handleBack };
}
