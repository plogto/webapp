import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { AddTicket } from "@components/AddTicket";
import { Card } from "@components/Card";
import { Icon } from "@components/Icon";
import { TicketMessagesList } from "@components/Lists/TicketMessagesList";
import { Menu } from "@components/Menu";
import type { MenuProps } from "@components/Menu/Menu.types";
import { PageHeader } from "@components/PageHeader";
import { Status } from "@components/Status";
import { PageUrls } from "@enums/pages";
import styles from "./Ticket.module.css";
import { useAddTicketMessage } from "./hooks/useAddTicketMessage";
import { useTicket } from "./hooks/useTicket";

export function Ticket() {
  const { filterMenuItems, loading, ticketMessages, emptyStatus, getMoreData } =
    useTicket();

  const { isShowAddTicket, openAddTicket, closeAddTicket } =
    useAddTicketMessage();

  const { t } = useTranslation("ticket");

  const MENU_ITEMS: MenuProps["items"] = [
    {
      key: "copy",
      title: t("buttons.newMessage"),
      icon: "Plus",
      onClick: openAddTicket,
    },
  ];

  const menu = (
    <div className="w-3">
      <Menu
        items={filterMenuItems(MENU_ITEMS)}
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
            isShowBackLink={false}
            title={ticketMessages.ticket.subject}
            rightSide={!isMobile && menu}
            description={headerDescription}
          />
        )}
        {isShowAddTicket && (
          <AddTicket
            ticket={ticketMessages?.ticket}
            onCloseButton={closeAddTicket}
            submitButtonTitle={t("buttons.send")}
          />
        )}
        <TicketMessagesList
          ticketMessages={ticketMessages}
          isLoading={loading}
          emptyStatus={emptyStatus}
          getMoreData={getMoreData}
        />
      </Card>
    </div>
  );
}
