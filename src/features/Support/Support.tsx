import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { AddTicket } from "@components/AddTicket";
import { Card } from "@components/Card";
import { Icon } from "@components/Icon";
import { TicketPreviewsList } from "@components/Lists/TicketPreviewsList";
import { PageHeader } from "@components/PageHeader";
import { PageUrls } from "@enums/pages";
import styles from "./Support.module.css";
import { useCreateTicket, useSupport } from "./hooks";

export function Support() {
  const { tickets, emptyStatus, getMoreData } = useSupport();
  const { showCreateTicket, openCreateTicket, closeCreateTicket } =
    useCreateTicket();

  const { t } = useTranslation("support");

  return (
    <div className={styles.support}>
      <Card shadow={!isMobile} rounded={!isMobile} className={styles.tickets}>
        <PageHeader
          backLink={isMobile ? PageUrls.SETTINGS : PageUrls.EDIT_PROFILE}
          title={t("texts.tickets")}
          className={classNames(isMobile ? styles.pageHeader : styles.header)}
          showBackLink={isMobile}
          rightSide={
            <button className={styles.addButton} onClick={openCreateTicket}>
              <Icon name="Plus" className={classNames(styles.icon)} />
            </button>
          }
        />
        {showCreateTicket && (
          <AddTicket
            showSubject
            submitButtonTitle={t("buttons.createTicket")}
            onCloseButton={closeCreateTicket}
          />
        )}
        <TicketPreviewsList
          data={tickets}
          emptyStatus={emptyStatus}
          getMoreData={getMoreData}
        />
      </Card>
    </div>
  );
}
