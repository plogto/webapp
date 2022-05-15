import { Posts } from "@components/Posts";
import { Header } from "./components/Header";
import { useTag } from "./hooks/useTag";

export function Tag() {
  const { posts, tag } = useTag();

  return posts && tag ? (
    <>
      <Header tag={tag} />
      {posts?.length > 0 && <Posts posts={posts} />}
    </>
  ) : (
    <></>
  );
}
