import type { Post } from "@t/post";
import styles from "../PostCard.module.css";
import { Hashtag } from ".";
import { v4 as uuid } from "uuid";
import { usePostParser } from "@hooks/usePostParser";

type Props = {
  content: Post["content"];
};

export function Content({ content }: Props) {
  const { parsePost } = usePostParser();
  return (
    <p className={styles.content}>
      {parsePost({
        content,
        hashtagComponent: (value: string) => (
          <Hashtag key={uuid()} value={value} />
        ),
      })}
    </p>
  );
}
