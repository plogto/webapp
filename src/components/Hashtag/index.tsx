import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useNavigation } from "@hooks/useNavigation";
import type { HashtagProps } from "./@types";

export function Hashtag(props: HashtagProps) {
  const { value, isClickable = true } = props;
  const { query } = useRouter();
  const tagName = value.substring(1);
  const { formatTagPageRoute } = useNavigation();

  const wrapperClasses = classNames("text-primary-500", {
    "font-bold": tagName.toLowerCase() === String(query.tagName).toLowerCase(),
  });

  return isClickable ? (
    <Link href={formatTagPageRoute(tagName)}>
      <a className={wrapperClasses}>{value}</a>
    </Link>
  ) : (
    <span className={wrapperClasses}>{value}</span>
  );
}
