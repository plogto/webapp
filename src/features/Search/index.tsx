import styles from "./Search.module.css";
import SearchInput from "./components/SearchInput";
import { useSearch } from "./hooks/useSearch";
import Users from "./components/Users";
import Tags from "./components/Tags";
import Button from "@/components/Button";
import { useTranslation } from "react-i18next";
import { HashtagIcon, UsersIcon } from "@heroicons/react/solid";

export default function Search() {
  const { formMethods, submit, result, filter, setFilter } = useSearch();
  const { register, handleSubmit, watch } = formMethods;

  const { t } = useTranslation("common");

  const filters = [
    {
      title: t("users"),
      active: filter === "users",
      icon: <UsersIcon className="w-4 h-4 mr-1" />,
      onClick: () => setFilter("users"),
    },
    {
      title: t("tags"),
      active: filter === "tags",
      icon: <HashtagIcon className="w-4 h-4 mr-0.5" />,
      onClick: () => setFilter("tags"),
    },
  ];

  return (
    <div className={styles.wrapper}>
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
            {f.icon}
            {f.title}
          </Button>
        ))}
      </div>
      {filter == "users" && <Users user={result?.user} />}
      {filter == "tags" && <Tags tag={result?.tag} />}
    </div>
  );
}
