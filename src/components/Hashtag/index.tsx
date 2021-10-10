import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useNavigation } from "@hooks/useNavigation";

type Props = {
  value: string;
};

export function Hashtag({ value }: Props) {
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
