import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { HashtagProps } from "./@types";
import { useNavigation } from "@hooks/useNavigation";

export function Hashtag(props: HashtagProps) {
  const { value } = props;

  const tagName = value.substring(1);
  const { formatTagPageRoute } = useNavigation();
  const { query } = useRouter();
  const classes = classNames({
    "font-bold": tagName === query.tagName,
  });

  return (
    <Link href={formatTagPageRoute(tagName)}>
      <a className={`text-primary-500 ${classes}`}>{value}</a>
    </Link>
  );
}
