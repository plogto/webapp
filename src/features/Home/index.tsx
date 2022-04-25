import { useHome } from "./hooks/useHome";
import { Posts } from "@components/Posts";

export function Home() {
  const { posts } = useHome();

  return <Posts posts={posts} className="p-2 md:p-4" />;
}
