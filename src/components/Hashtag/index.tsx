import classNames from "classnames";
import { useNavigation } from "@hooks/useNavigation";
import type { HashtagProps } from "./@types";
import Link from "next/link";
import { useRouter } from "next/router";

export function Hashtag(props: HashtagProps) {
  const { value, isClickable = true } = props;
  const { query } = useRouter();
  const tagName = value.substring(1);
  const { formatTagPageRoute } = useNavigation();

  const wrapperClasses = classNames("text-primary hover:underline", {
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
