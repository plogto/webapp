import { HashtagIcon, UsersIcon } from "@heroicons/react/solid";
import { MobileOnlyView } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { MobileTrends } from "../Trends";
import styles from "./Search.module.css";
import { Tags, Users } from "./components";
import { useSearch } from "./hooks/useSearch";
import { Button } from "@components/Button";

export function Search() {
  const { formMethods, onSubmit, result, filter, setFilter } = useSearch();
  const { register, handleSubmit, watch } = formMethods;

  const { t } = useTranslation(["common", "search"]);
  const filters = [
    {
      title: t("common:users"),
      active: filter === "users",
      icon: <UsersIcon />,
      onClick: () => setFilter("users"),
    },
    {
      title: t("common:tags"),
      active: filter === "tags",
      icon: <HashtagIcon />,
      onClick: () => setFilter("tags"),
    },
  ];

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.header}>
          <input
            {...register("expression")}
            onInput={handleSubmit(() => onSubmit(watch()))}
            placeholder={t("search:placeholders.search")}
            name="expression"
            type="text"
            autoComplete="off"
            className={styles.searchInput}
          />
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
              </Button>
            ))}
          </div>
        </div>
      </form>

      <MobileOnlyView className="w-full">
        <MobileTrends />
      </MobileOnlyView>

      {filter == "users" && <Users user={result?.user} />}
      {filter == "tags" && <Tags tag={result?.tag} />}
    </>
  );
}
