import styles from "./Tag.module.css";
import { useTag } from "./hooks/useTag";
import Posts from "@/components/Posts";
import Header from "./components/Header";

export default function Tag() {
  const { posts, tagName } = useTag();

  return (
    <div className={styles.container}>
      {posts && tagName && (
        <>
          <Header tagName={tagName} />
          {posts?.length > 0 && <Posts posts={posts} />}
        </>
      )}
    </div>
  );
}
