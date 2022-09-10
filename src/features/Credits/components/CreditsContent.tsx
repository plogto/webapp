import { isMobile } from "react-device-detect";
import Image from "next/image";
import { ID } from "@constants";
import { Card } from "@components/Card";
import { CreditTransactions } from "@components/CreditTransactions/CreditTransactions";
import { useCredit } from "@hooks/useCredit";
import styles from "../Credits.module.css";
import type { CreditsContentProps } from "../Credits.types";

export function CreditsContent(props: CreditsContentProps) {
  const { user, creditTransactions, getMoreData, emptyStatus } = props;
  const { formatCreditAmount } = useCredit();

  return (
    <Card
      className={styles.profileContent}
      shadow={!isMobile}
      rounded={!isMobile}
    >
      <div className={styles.credits}>
        <Image
          src="/static/images/credit.png"
          height={64}
          width={64}
          alt="credit"
        />
        <span>{formatCreditAmount(user?.credits)}</span>
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
  );
}
