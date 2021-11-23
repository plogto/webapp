import { Switch } from "@headlessui/react";
import classNames from "classnames";
import { useState } from "react";
import { ToggleProps } from "./@types";
import styles from "./Toggle.module.css";

export function Toggle(props: ToggleProps) {
  const { label, className, checked } = props;
  const [enabled, setEnabled] = useState(checked || false);

  const wrapperClasses = classNames(styles.wrapper, className);

  const toggleClasses = classNames(
    styles.toggle,
    enabled ? "bg-primary-500" : "bg-gray-200",
  );

  const sliderClasses = classNames(
    enabled ? "translate-x-6" : "translate-x-1",
    styles.slider,
    "transform",
  );

  return (
    <Switch.Group>
      <div className={wrapperClasses}>
        {label && <Switch.Label className={styles.label}>{label}</Switch.Label>}
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={toggleClasses}
        >
          <span className={sliderClasses} />
        </Switch>
      </div>
    </Switch.Group>
  );
}
