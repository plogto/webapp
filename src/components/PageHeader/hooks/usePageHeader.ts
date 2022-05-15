import { useCallback } from "react";
import { PageUrls } from "@enums/pages";
import { useRouter } from "next/router";

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
