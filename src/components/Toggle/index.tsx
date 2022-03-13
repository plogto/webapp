import { Switch } from "@headlessui/react";
import classNames from "classnames";
import { useCallback, useState } from "react";
import styles from "./Toggle.module.css";
import type { ToggleProps } from "./@types";

export function Toggle(props: ToggleProps) {
  const { label, className, checked, onChange } = props;
  const [enabled, setEnabled] = useState(checked || false);

  const wrapperClasses = classNames(styles.wrapper, className);

  const toggleClasses = classNames(
    styles.toggle,
    enabled ? "bg-gray-900" : "bg-gray-200",
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
