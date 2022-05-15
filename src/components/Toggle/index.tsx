import { Switch } from "@headlessui/react";
import { useCallback, useState } from "react";
import classNames from "classnames";
import type { ToggleProps } from "./@types";
import styles from "./Toggle.module.css";

export function Toggle(props: ToggleProps) {
  const { label, className, checked, onChange } = props;
  const [enabled, setEnabled] = useState(checked || false);

  const wrapperClasses = classNames(styles.wrapper, className);

  const toggleClasses = classNames(
    styles.toggle,
    enabled ? "bg-foreground" : "bg-background-dark",
  );

  const sliderClasses = classNames(
    enabled ? "translate-x-6" : "translate-x-1",
    styles.slider,
    "transform",
  );

  const handleChange = useCallback(
    (value: boolean) => {
      setEnabled(value);
      onChange(value);
    },
    [onChange],
  );

  return (
    <Switch.Group>
      <div className={wrapperClasses}>
        {label && <Switch.Label className={styles.label}>{label}</Switch.Label>}
        <Switch
          checked={enabled}
          className={toggleClasses}
          onChange={handleChange}
        >
          <span className={sliderClasses} />
        </Switch>
      </div>
    </Switch.Group>
  );
}
