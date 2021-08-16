import Navbar from "@/components/Navbar";
import PostCard from "../PostCard";
import styles from "./Home.module.css";
import { useHome } from "./hooks/useHome";

export default function Home() {
  const { posts } = useHome();

  return (
    <div className={styles.container}>
      <div className="w-120 mb-20">
        {posts.length > 0 &&
          posts.map(post => <PostCard key={post.id} post={post} />)}
      </div>
      <Navbar />
    </div>
  );
}
