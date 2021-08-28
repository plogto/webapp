import type { User } from "@/@types/user";
import Button from "@/components/Button";
import styles from "../Profile.module.css";

type Props = {
  connectionStatus: User["connectionStatus"];
};

export default function ConnectionButton({ connectionStatus }: Props) {
  return connectionStatus == 2 ? (
    <Button type="button" className={styles.following}>
      Following
    </Button>
  ) : connectionStatus == 1 ? (
    <Button type="button" className={styles.follow}>
      Pending
    </Button>
  ) : (
    <Button type="button" className={styles.follow}>
      Follow
    </Button>
  );
}
