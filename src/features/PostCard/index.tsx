import Link from "next/link";
import styles from "./PostCard.module.css";
import { Content, Header, Footer } from "./components";
import { useNavigation } from "@hooks/useNavigation";
import type { Post } from "@t/post";

type Props = {
  post: Post;
};
// TODO: refactor this component
export function PostCard({ post }: Props) {
  const { id, isLiked, isSaved, comments, url } = post;
  const { formatPostPageRoute } = useNavigation();
  return (
    <div className={styles.wrapper}>
      <Header {...post.user} />
      {/* TODO: refactor this Link */}
      <Link href={formatPostPageRoute(url)}>
        <a>
          <Content content={post.content} />
        </a>
      </Link>
      <Footer
        id={id}
        url={url}
        isLiked={isLiked}
        isSaved={isSaved}
        commentsCounter={comments?.pagination.totalDocs}
      />
    </div>
  );
}
