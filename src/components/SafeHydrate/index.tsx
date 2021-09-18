import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function SafeHydrate({ children }: Props): JSX.Element {
  return (
    <div suppressHydrationWarning>
      {typeof document === "undefined" || typeof window === "undefined"
        ? null
        : children}
    </div>
  );
}
