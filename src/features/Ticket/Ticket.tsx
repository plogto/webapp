import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { AddTicket } from "@components/AddTicket";
import { Card } from "@components/Card";
import { Icon } from "@components/Icon";
import { TicketMessagesList } from "@components/Lists/TicketMessagesList";
import { Menu } from "@components/Menu";
import { ConfirmationModal } from "@components/Modal";
import { PageHeader } from "@components/PageHeader";
import { Status } from "@components/Status";
import { useModalContext } from "@contexts/ModalContext";
import { PageUrls } from "@enums/pages";
import styles from "./Ticket.module.css";
import { useAddTicketMessage } from "./hooks/useAddTicketMessage";
import { useTicket } from "./hooks/useTicket";

export function Ticket() {
  const { showAddTicket, openAddTicket, closeAddTicket } =
    useAddTicketMessage();

  const {
    isLoading,
    ticketMessages,
    placeholder,
    menuItems,
    getMoreData,
    confirmationModal,
  } = useTicket({
    openAddTicket,
  });

  const { isOpen } = useModalContext();
  const { t } = useTranslation("ticket");

  const menu = (
    <div className="w-3">
      <Menu
        items={menuItems}
        className="absolute top-1.5 md:top-2.5 right-0.5"
        itemsClassName="absolute right-2 w-60"
        buttonIcon={
          <span className="more-button">
            <Icon name="DotsHorizontal" className={classNames(styles.icon)} />
          </span>
        }
      />
    </div>
  );

  const headerDescription = ticketMessages?.ticket && (
    <div className={styles.headerDescription}>
      <span className={styles.url}>#{ticketMessages.ticket.url}</span>
      <Status status={ticketMessages.ticket.status} />
    </div>
  );

  return (
    <div className={styles.ticketWrapper}>
      <Card shadow={!isMobile} rounded={!isMobile} className={styles.ticket}>
        {isMobile && (
          <PageHeader
            backLink={PageUrls.SUPPORT}
            className={styles.pageHeader}
            title={
              ticketMessages?.ticket
                ? `#${ticketMessages.ticket.url}`
                : t("texts.ticket")
            }
            rightSide={ticketMessages?.ticket && menu}
          />
        )}
        {ticketMessages?.ticket && (
          <PageHeader
            className={styles.header}
            isTitleCompact={false}
            showBackLink={false}
            title={ticketMessages.ticket.subject}
            rightSide={!isMobile && menu}
            description={headerDescription}
          />
        )}
        {showAddTicket && (
          <AddTicket
            ticket={ticketMessages?.ticket}
            onCloseButton={closeAddTicket}
            submitButtonTitle={t("buttons.send")}
          />
        )}
        <TicketMessagesList
          data={ticketMessages}
          isLoading={isLoading}
          placeholder={placeholder}
          getMoreData={getMoreData}
        />
      </Card>
      {confirmationModal && (
        <ConfirmationModal {...confirmationModal} isOpen={isOpen} />
      )}
    </div>
  );
}
