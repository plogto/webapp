export interface ToggleProps {
  label?: string;
  description?: string;
  className?: string;
  checked?: boolean;
  onChange: (isPrivate: boolean) => void;
}
