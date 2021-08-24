import Posts from "@/components/Posts";
import styles from "./Home.module.css";
import { useHome } from "./hooks/useHome";

export default function Home() {
  const { posts } = useHome();

  return (
    <div className={styles.container}>
      <Posts posts={posts} />
    </div>
  );
}
