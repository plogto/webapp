import { useTranslation } from "react-i18next";
import { ModalColor } from "@enums";
import type { InformationModalProps } from "@components/Modal/Modal.types";
import { useUrls } from "@hooks/useUrls";
import { copyTextToClipboard } from "@utils/copyTextToClipboard";
import { fillToast } from "@utils/toast";
import type { UseInviteFriendsProps } from "../Credits.types";
import { InvitationCode } from "../components/InvitationCode";

export function useInviteFriends(props: UseInviteFriendsProps) {
  const { user } = props;
  const { t } = useTranslation("credits");
  const { formatInvitationUrl } = useUrls();

  const inviteFriendsModalData: InformationModalProps = {
    icon: "UserPlus",
    title: t("modals.inviteFriends.title"),
    description: t("modals.inviteFriends.description"),
    content: <InvitationCode invitationCode={user?.invitationCode} />,
    submitButton: <>{t("texts.copyLink")}</>,
    onSubmit: () =>
      copyTextToClipboard(formatInvitationUrl(user?.invitationCode)).then(
        () => {
          fillToast(t("texts.invitationLinkCopiedToClipboard"));
        },
      ),
    color: ModalColor.NORMAL,
  };

  return { inviteFriendsModalData };
}
