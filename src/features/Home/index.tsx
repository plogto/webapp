import Posts from "@/components/Posts";
import Wrapper from "@/components/Wrapper";
import { useHome } from "./hooks/useHome";

export default function Home() {
  const { posts } = useHome();

  return (
    <Wrapper>
      <Posts posts={posts} className="mt-2 lg:mt-5" />
    </Wrapper>
  );
}
