import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { AddTicket } from "@components/AddTicket";
import { Card } from "@components/Card";
import { Icon } from "@components/Icon";
import { TicketsList } from "@components/Lists/TicketsList";
import { Menu } from "@components/Menu";
import type { MenuProps } from "@components/Menu/Menu.types";
import { PageHeader } from "@components/PageHeader";
import { PageUrls } from "@enums/pages";
import styles from "../Support.module.css";
import { useCreateTicket } from "../hooks";
import { useSupport } from "../hooks/useSupport";

export function Tickets() {
  const { tickets, emptyStatus, getMoreData } = useSupport();
  const { isShowCreateTicket, openCreateTicket, closeCreateTicket } =
    useCreateTicket();

  const { t } = useTranslation("support");
  const MENU_ITEMS: MenuProps["items"] = [
    {
      key: "copy",
      title: t("buttons.createTicket"),
      icon: "Plus",
      onClick: openCreateTicket,
    },
  ];

  const menu = (
    <div className="w-3">
      <Menu
        items={MENU_ITEMS}
        className="absolute top-1.5 md:top-2 right-0.5"
        itemsClassName="absolute right-2 w-60"
        buttonIcon={
          <span className="more-button">
            <Icon name="DotsHorizontal" className={classNames(styles.icon)} />
          </span>
        }
      />
    </div>
  );

  return (
    <div className={styles.ticketsWrapper}>
      <Card shadow={!isMobile} rounded={!isMobile} className={styles.tickets}>
        <PageHeader
          backLink={isMobile ? PageUrls.SETTINGS : PageUrls.EDIT_PROFILE}
          title={t("texts.tickets")}
          className={classNames(isMobile ? styles.pageHeader : styles.header)}
          isShowBackLink={isMobile}
          rightSide={menu}
        />
        {isShowCreateTicket && (
          <AddTicket
            isShowSubject
            submitButtonTitle={t("buttons.createTicket")}
            onCloseButton={closeCreateTicket}
          />
        )}
        <TicketsList
          tickets={tickets}
          emptyStatus={emptyStatus}
          getMoreData={getMoreData}
        />
      </Card>
    </div>
  );
}
