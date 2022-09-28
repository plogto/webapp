import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useNavigator } from "@hooks/useNavigator";
import type { HashtagProps } from "./Hashtag.types";

export function Hashtag(props: HashtagProps) {
  const { value, isClickable = true } = props;
  const { query } = useRouter();
  const tagName = value.substring(1);
  const { formatTagPageRoute } = useNavigator();

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
