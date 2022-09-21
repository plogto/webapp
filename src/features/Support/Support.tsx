import { Ticket } from "@features/Ticket";
import styles from "./Support.module.css";
import type { SupportProps } from "./Support.types";
import { Tickets } from "./components/Tickets";

export function Support(props: SupportProps) {
  const { isShowTickets = true, isShowTicketMessages = true } = props;
  return (
    <div className={styles.support}>
      {isShowTickets && <Tickets />}
      {isShowTicketMessages && <Ticket />}
    </div>
  );
}
