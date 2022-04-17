import { useRouter } from "next/router";
import { useCallback } from "react";
import { PageUrls } from "@enums/pages";

export function usePageHeader() {
  const router = useRouter();
  const { back, push } = router;

  const handleBack = useCallback(() => {
    if (window.history.length > 2) {
      back();
    } else {
      push(PageUrls.HOME);
    }
  }, [back, push]);

  return { handleBack };
}
