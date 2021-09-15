import styles from "./Search.module.css";
import SearchInput from "./components/SearchInput";
import { useSearch } from "./hooks/useSearch";
import Users from "./components/Users";
import Tags from "./components/Tags";
import Button from "@/components/Button";
import { useTranslation } from "react-i18next";

export default function Search() {
  const { formMethods, submit, loading, result, filter, setFilter } =
    useSearch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = formMethods;

  const { t } = useTranslation("common");

  const filters = [
    {
      title: t("users"),
      active: filter === "users",
      onClick: () => setFilter("users"),
    },
    {
      title: t("tags"),
      active: filter === "tags",
      onClick: () => setFilter("tags"),
    },
  ];

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        <SearchInput
          onChange={handleSubmit(() => submit(watch()))}
          register={register("expression")}
        />
      </form>
      <div className={styles.filters}>
        {filters.map(f => (
          <Button
            key={f.title}
            className={`${styles.filterButton} ${
              f.active ? styles.active : ""
            }`}
            onClick={f.onClick}
          >
            {f.title}
          </Button>
        ))}
      </div>
      {filter == "users" && <Users user={result?.user} />}
      {filter == "tags" && <Tags tag={result?.tag} />}
    </div>
  );
}
