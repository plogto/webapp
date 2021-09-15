import styles from "./Tag.module.css";
import { useTag } from "./hooks/useTag";
import Posts from "@/components/Posts";
import Header from "./components/Header";

export default function Tag() {
  const { posts, tag } = useTag();

  return (
    <div className={styles.container}>
      {posts && tag && (
        <>
          <Header tag={tag} />
          {posts?.length > 0 && <Posts posts={posts} />}
        </>
      )}
    </div>
  );
}
