import { ReactNode, useEffect, useState } from "react";
import { isDocumentExists, isWindowExists } from "@utils";

interface Props {
  children: ReactNode;
}

export function SafeHydrate(props: Props) {
  const { children } = props;

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div suppressHydrationWarning>
      {!isWindowExists() || !isDocumentExists() ? null : children}
    </div>
  );
}
