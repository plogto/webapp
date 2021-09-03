import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SafeHydrate = ({ children }: Props): JSX.Element => {
  return (
    <div suppressHydrationWarning>
      {typeof document === "undefined" || typeof window === "undefined"
        ? null
        : children}
    </div>
  );
};

export default SafeHydrate;
