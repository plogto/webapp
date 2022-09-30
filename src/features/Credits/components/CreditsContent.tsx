import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { ID } from "@constants";
import { Button } from "@components/Buttons/Button";
import { Card } from "@components/Card";
import { CreditTransactions } from "@components/CreditTransactions/CreditTransactions";
import { Icon } from "@components/Icon";
import { InformationModal } from "@components/Modal/components";
import { useModalContext } from "@contexts/ModalContext";
import { useCredit } from "@hooks/useCredit";
import styles from "../Credits.module.css";
import type { CreditsContentProps } from "../Credits.types";
import { useInviteFriends } from "../hooks";

export function CreditsContent(props: CreditsContentProps) {
  const { user, creditTransactions, getMoreData, emptyStatus } = props;
  const { formatCreditAmount } = useCredit();
  const { inviteFriendsModalData } = useInviteFriends({ user });
  const { isOpen, openModal } = useModalContext();
  const { t } = useTranslation("credits");

  return (
    <>
      <Card
        className={styles.profileContent}
        shadow={!isMobile}
        rounded={!isMobile}
      >
        <div className={styles.creditsWrapper}>
          <div className={styles.buttons}>
            <Button onClick={openModal} className={styles.inviteFriends}>
              <Icon name="UserPlus" width={18} strokeWidth={2} />
              <span>{t("buttons.inviteFriends")}</span>
            </Button>
          </div>
          <div className={styles.credits}>
            <Image
              src="/static/images/credit.png"
              height={52}
              width={52}
              alt="credit"
            />
            <span>{formatCreditAmount(user?.credits)}</span>
          </div>
        </div>
        <div>
          <CreditTransactions
            data={creditTransactions}
            getMoreData={getMoreData}
            emptyStatus={emptyStatus}
            scrollableTarget={ID.CREDIT_TRANSACTIONS}
          />
        </div>
      </Card>
      <InformationModal {...inviteFriendsModalData} isOpen={isOpen} />
    </>
  );
}
