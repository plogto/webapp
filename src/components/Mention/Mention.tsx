import classNames from "classnames";
import Link from "next/link";
import { useNavigator } from "@hooks/useNavigator";
import type { MentionProps } from "./Mention.types";

export function Mention(props: MentionProps) {
  const { value } = props;
  const username = value.substring(1);
  const { formatProfilePageRoute } = useNavigator();

  const wrapperClasses = classNames("text-primary hover:underline");

  return (
    <Link href={formatProfilePageRoute(username)}>
      <a className={wrapperClasses}>{value}</a>
    </Link>
  );
}
