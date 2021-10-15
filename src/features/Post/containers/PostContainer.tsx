import styles from "../Post.module.css";
import { usePost } from "../hooks";
import { Comments } from "@components/Comments";
import { Content, Header, Footer, AddComment } from "@components/Post";

export function Post() {
  const {
    post,
    isLiked,
    isSaved,
    likePost,
    unlikePost,
    savePost,
    unsavePost,
    addComment,
  } = usePost();

  return post ? (
    <div className={styles.postContainerWrapper}>
      <Header {...post?.user} />
      <Content content={post?.content || ""} />
      <Footer
        id={post.id}
        isLiked={isLiked}
        isSaved={isSaved}
        commentsCounter={post.comments?.pagination.totalDocs}
        likePost={likePost}
        unlikePost={unlikePost}
        savePost={savePost}
        unsavePost={unsavePost}
      />
      <AddComment {...addComment} />
      <Comments comments={post.comments} />
    </div>
  ) : null;
}
