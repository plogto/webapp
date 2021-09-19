import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  value: string;
};

export function Hashtag({ value }: Props) {
  const tagName = value.substring(1);
  const { query } = useRouter();
  const classes = classNames("text-indigo-500", {
    "font-bold": tagName === query.tagName,
  });
  return (
    <Link href={`/t/${tagName}`}>
      <a className={classes}>{value}</a>
    </Link>
  );
}
