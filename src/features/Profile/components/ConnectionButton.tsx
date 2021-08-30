import { MouseEventHandler, ReactNode } from "react";
import Button from "@/components/Button";

type Props = {
  className?: string;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
};

export default function ConnectionButton({
  onClick,
  children,
  className,
  loading,
}: Props) {
  return (
    <Button
      type="button"
      className={className}
      onClick={onClick}
      // TODO: fix spacing in loading mode
      loading={loading}>
      {children}
    </Button>
  );
}
