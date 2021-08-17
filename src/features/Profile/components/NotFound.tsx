import Avatar from "@/components/Avatar";
import {
  CogIcon,
  EmojiSadIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import styles from "../Profile.module.css";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <EmojiSadIcon className="w-20 h-20" />
      <p className="text-center mt-2">User Not Found!</p>
    </div>
  );
}
