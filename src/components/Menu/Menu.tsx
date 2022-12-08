import { Menu as HeadlessMenu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import classNames from "classnames";
import { Icon } from "@components/Icon";
import styles from "./Menu.module.css";
import type { MenuProps } from "./Menu.types";

export function Menu(props: MenuProps) {
  const { items, buttonIcon, className, itemsClassName } = props;

  const itemsClasses = classNames(styles.menuItems, itemsClassName);

  return (
    <HeadlessMenu>
      {({ open }) => {
        return (
          <div className={className}>
            <Transition
              as={Fragment}
              show={open}
              enter={styles.enterMenuTransition}
              enterFrom={styles.enterFromMenuTransition}
              enterTo={styles.enterToMenuTransition}
              leave={styles.leaveMenuTransition}
              leaveFrom={styles.leaveFromMenuTransition}
              leaveTo={styles.leaveToMenuTransition}
            >
              <HeadlessMenu.Items className={itemsClasses} static>
                {items.map(({ title, icon, onClick, type = "normal" }) => (
                  <HeadlessMenu.Item key={title}>
                    <button
                      onClick={onClick}
                      className={classNames(styles.menuItem, styles[type])}
                    >
                      <span className={styles.title}>{title}</span>
                      {icon && <Icon name={icon} className={styles.icon} />}
                    </button>
                  </HeadlessMenu.Item>
                ))}
              </HeadlessMenu.Items>
            </Transition>
            <HeadlessMenu.Button>{buttonIcon}</HeadlessMenu.Button>
          </div>
        );
      }}
    </HeadlessMenu>
  );
}
