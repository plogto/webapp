import styles from "./Search.module.css";
import { useSearch } from "./hooks/useSearch";
import { Users, Tags } from "./components";
import { Button } from "@/components/Button";
import { useTranslation } from "react-i18next";
import { HashtagIcon, UsersIcon } from "@heroicons/react/solid";
import { Wrapper } from "@/components/Wrapper";
import { MobileTrends } from "../Trends";
import { MobileOnlyView } from "react-device-detect";

export function Search() {
  const { formMethods, submit, result, filter, setFilter } = useSearch();
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
    <Wrapper>
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        <div className={styles.header}>
          <input
            {...register("expression")}
            onInput={handleSubmit(() => submit(watch()))}
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

      <MobileOnlyView viewClassName="w-full">
        <MobileTrends />
      </MobileOnlyView>

      {filter == "users" && <Users user={result?.user} />}
      {filter == "tags" && <Tags tag={result?.tag} />}
    </Wrapper>
  );
}
