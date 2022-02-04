import { useState } from "react";

export function useComments() {
  const [showReplies, setShowReplies] = useState(false);

  return { showReplies, setShowReplies };
}
