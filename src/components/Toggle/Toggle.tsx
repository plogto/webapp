import { Switch } from "@headlessui/react";
import { useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./Toggle.module.css";
import type { ToggleProps } from "./Toggle.types";

export function Toggle(props: ToggleProps) {
  const { label, description, className, checked, onChange } = props;
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(!!checked);
  }, [checked]);

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
        <div className="flex flex-col w-10/12">
          {label && (
            <Switch.Label>
              <span className={styles.label}>{label}</span>
              {description && (
                <p className={styles.description}>{description}</p>
              )}
            </Switch.Label>
          )}
        </div>
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
