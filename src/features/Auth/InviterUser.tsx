import { useTranslation } from "react-i18next";
import classNames from "classnames";
import Link from "next/link";
import { Avatar } from "@components/Avatar";
import { FullName } from "@components/FullName";
import { useNavigator } from "@hooks/useNavigator";
import styles from "./Auth.module.css";
import type { InviterUserProps } from "./Auth.types";
import { useInvitation } from "./hooks/useInvitation";

export function InviterUser(props: InviterUserProps) {
  const { className } = props;
  const { inviterUser } = useInvitation();
  const { formatProfilePageRoute } = useNavigator();
  const { t } = useTranslation(["auth", "common"]);

  const wrapperClasses = classNames(styles.inviterUser, className);

  return inviterUser ? (
    <Link href={formatProfilePageRoute(inviterUser.username)}>
      <a className={wrapperClasses}>
        {t("auth:texts.invitedBy")}
        <Avatar
          className="mx-2"
          avatar={inviterUser.avatar}
          alt={inviterUser.fullName}
          size="miniature"
        />
        <FullName fullName={inviterUser?.fullName} size="small" />
      </a>
    </Link>
  ) : (
    <></>
  );
}
