import { useTag } from "./hooks/useTag";
import { Posts } from "@components/Posts";
import { Header } from "./components/Header";

export function Tag() {
  const { posts, tag } = useTag();

  return posts && tag ? (
    <>
      <Header tag={tag} />
      {posts?.length > 0 && (
        <Posts className="pt-0 px-2 lg:px-5" posts={posts} />
      )}
    </>
  ) : (
    <></>
  );
}
