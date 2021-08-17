import PostCard from "../PostCard";
import styles from "./Home.module.css";
import { useHome } from "./hooks/useHome";

export default function Home() {
  const { posts } = useHome();

  return (
    <div className={styles.container}>
      <div className="w-full lg:w-120 mb-20 px-2 lg:px-0">
        {posts.length > 0 &&
          posts.map(post => <PostCard key={post.id} post={post} />)}
      </div>
    </div>
  );
}
