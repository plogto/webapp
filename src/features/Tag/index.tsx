import { useTag } from "./hooks/useTag";
import Posts from "@/components/Posts";
import Header from "./components/Header";
import Wrapper from "@/components/Wrapper";

export default function Tag() {
  const { posts, tag } = useTag();

  return (
    <Wrapper>
      {posts && tag && (
        <>
          <Header tag={tag} />
          {posts?.length > 0 && (
            <Posts className="pt-2 lg:pt-0" posts={posts} />
          )}
        </>
      )}
    </Wrapper>
  );
}
