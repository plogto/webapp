import { v4 as uuid } from "uuid";
import styles from "../../PostCard.module.css";
import { Hashtag } from "@components/Hashtag";
import { usePostParser } from "@hooks/usePostParser";
import type { Post } from "@t/post";

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
