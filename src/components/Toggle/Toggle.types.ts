export interface ToggleProps {
  label?: string;
  className?: string;
  checked?: boolean;
  onChange: (isPrivate: boolean) => void;
}
