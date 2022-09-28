import { ReactNode, useEffect, useState } from "react";

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
      {typeof document === "undefined" || typeof window === "undefined"
        ? null
        : children}
    </div>
  );
}
