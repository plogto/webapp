import classNames from "classnames";
import { POST_TYPES } from "@constants";
import { Post } from "@components/Post";
import type { PostsProps } from "./@types";
import styles from "./Posts.module.css";

export function Posts(props: PostsProps) {
  const { posts, className } = props;
  const isPosts = posts && posts.length > 0;
  const wrapperClasses = classNames(styles.posts, className);

  return (
    <div className={wrapperClasses}>
      {isPosts &&
        posts.map(post => (
          <Post
            key={post.id}
            post={post}
            className={styles.post}
            type={POST_TYPES.CARD}
          />
        ))}
    </div>
  );
}
