import { Posts } from "@components/Posts";
import { useHome } from "./hooks/useHome";

export function Home() {
  const { posts } = useHome();

  return <Posts posts={posts} />;
}
