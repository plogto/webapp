import styles from "../Post.module.css";
import { usePost } from "../hooks";
import { Content, Header, Footer } from "@components/Post";

export function Post() {
  const {
    post,
    isLiked,
    isSaved,
    likePost,
    unlikePost,
    savePost,
    unsavePost,
    addPostComment,
  } = usePost();

  return post ? (
    <div className={styles.wrapper}>
      <Header {...post?.user} />
      <Content content={post?.content || ""} />
      <Footer
        id={post.id}
        isLiked={isLiked}
        isSaved={isSaved}
        comments={post.comments}
        commentsCounter={post.comments?.pagination.totalDocs}
        likePost={likePost}
        unlikePost={unlikePost}
        savePost={savePost}
        unsavePost={unsavePost}
        addPostComment={addPostComment}
        showComments
        showAddPostComment
      />
    </div>
  ) : null;
}
