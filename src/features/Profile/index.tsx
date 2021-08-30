import styles from "./Profile.module.css";
import { useProfile } from "./hooks/useProfile";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Posts from "@/components/Posts";

export default function Profile() {
  const { getUserByUsernameResponse, user, posts } = useProfile();

  return (
    <div className={styles.container}>
      {getUserByUsernameResponse.error?.message ? (
        <NotFound />
      ) : (
        <>
          <div className="w-full lg:w-128 h-screen">
            {user && <Header {...user} />}
            <Posts posts={posts} />
          </div>
        </>
      )}
    </div>
  );
}
