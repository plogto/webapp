import Navbar from "@/components/Navbar";
import PostCard from "../PostCard";
import styles from "./Dashboard.module.css";
import { useDashboard } from "./hooks/useDashboard";

export default function Dashboard() {
  const { posts } = useDashboard();

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
