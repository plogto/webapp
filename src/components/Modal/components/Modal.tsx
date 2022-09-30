import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import classNames from "classnames";
import styles from "../Modal.module.css";
import type { ModalProps } from "../Modal.types";

export function Modal(props: ModalProps) {
  const { children, isOpen, contentClassName, onClose } = props;

  const contentClasses = classNames(styles.content, contentClassName);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className={styles.dialogWrapper} onClose={onClose}>
        <div className={styles.dialog}>
          <Transition.Child
            as={Fragment}
            enter={styles.enterOverlayTransition}
            enterFrom={styles.enterFromOverlayTransition}
            enterTo={styles.enterToOverlayTransition}
            leave={styles.leaveOverlayTransition}
            leaveFrom={styles.leaveFromOverlayTransition}
            leaveTo={styles.leaveToOverlayTransition}
          >
            <Dialog.Overlay className={styles.overlay} />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter={styles.enterModalTransition}
            enterFrom={styles.enterFromModalTransition}
            enterTo={styles.enterToModalTransition}
            leave={styles.leaveModalTransition}
            leaveFrom={styles.leaveFromModalTransition}
            leaveTo={styles.leaveToModalTransition}
          >
            <div className={contentClasses}>{children}</div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
