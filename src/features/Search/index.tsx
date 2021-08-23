import styles from "./Search.module.css";
import SearchInput from "./components/SearchInput";
import { useSearch } from "./hooks/useSearch";
import Users from "./components/Users";

export default function Search() {
  const { formMethods, submit, loading, result } = useSearch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = formMethods;

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        <SearchInput
          onChange={handleSubmit(() => submit(watch()))}
          register={register("expression")}
        />
      </form>
      <Users user={result?.user} />
    </div>
  );
}
