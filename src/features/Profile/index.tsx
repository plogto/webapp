import styles from "./Profile.module.css";
import { useProfile } from "./hooks/useProfile";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

export default function Profile() {
  const { error, user } = useProfile();

  return (
    <div className={styles.container}>
      {error?.message ? (
        <NotFound />
      ) : (
        <>
          <div className="w-full lg:w-120 h-screen">
            {user && <Header {...user} />}
          </div>
        </>
      )}
    </div>
  );
}
