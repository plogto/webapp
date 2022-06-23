import { Menu } from "@headlessui/react";
import classNames from "classnames";
import { Icon } from "@components/Icon";
import styles from "../CropImage.module.css";
import type { AspectMenuProps } from "../CropImage.types";

export function AspectMenu(props: AspectMenuProps) {
  const { aspects, activeAspect, setActiveAspect } = props;
  return (
    <Menu>
      <div className={styles.aspectMenu}>
        <Menu.Items className={styles.menuItems}>
          {aspects.map(({ key, value, active, icon }) => (
            <Menu.Item key={key}>
              <button
                onClick={() => setActiveAspect({ key, value, active, icon })}
                className={classNames(
                  styles.menuItem,
                  activeAspect.key === key && styles.active,
                )}
              >
                <span className={styles.title}>{key}</span>
                {icon && <Icon name={icon} className="w-7 h-7 stroke-1.5" />}
              </button>
            </Menu.Item>
          ))}
        </Menu.Items>
        <Menu.Button className={styles.menuButton}>
          <Icon
            className="text-white w-5 h-5 stroke-2"
            name={
              aspects.find(item => item.key === activeAspect.key)?.icon ||
              "Square"
            }
          />
        </Menu.Button>
      </div>
    </Menu>
  );
}
