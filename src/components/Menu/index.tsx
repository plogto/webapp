import { Menu as HeadlessMenu } from "@headlessui/react";
import classNames from "classnames";
import { v4 as uuid } from "uuid";
import styles from "./Menu.module.css";
import { Icon } from "@components/Icon";
import type { MenuProps } from "./@types";

export function Menu(props: MenuProps) {
  const { items, buttonIcon, className, itemsClassName } = props;

  const itemsClasses = classNames(styles.menuItems, itemsClassName);

  return (
    <HeadlessMenu>
      <div className={className}>
        <HeadlessMenu.Items className={itemsClasses}>
          {items.map(({ title, icon, onClick, className }) => (
            <HeadlessMenu.Item key={uuid()}>
              <button
                onClick={onClick}
                className={classNames(styles.menuItem, className)}
              >
                <span className={styles.title}>{title}</span>
                {icon && <Icon name={icon} className={styles.icon} />}
              </button>
            </HeadlessMenu.Item>
          ))}
        </HeadlessMenu.Items>
        <HeadlessMenu.Button>{buttonIcon}</HeadlessMenu.Button>
      </div>
    </HeadlessMenu>
  );
}
