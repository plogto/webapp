import classNames from "classnames";
import { MobileOnlyView } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { MobileTrends } from "../Trends";
import styles from "./Search.module.css";
import { Tags, Users } from "./components";
import { useSearch } from "./hooks/useSearch";
import { Button } from "@components/Buttons/Button";
import { Card } from "@components/Card";
import { Icon } from "@components/Icon";
import type { Filter } from "./@types";

export function Search() {
  const { formMethods, onSubmit, result, filter, setFilter } = useSearch();
  const { register, handleSubmit, watch } = formMethods;

  const { t } = useTranslation(["common", "search"]);
  const filters: Filter[] = [
    {
      title: t("common:users"),
      active: filter === "users",
      icon: "users",
      onClick: () => setFilter("users"),
    },
    {
      title: t("common:tags"),
      active: filter === "tags",
      icon: "hashtag",
      onClick: () => setFilter("tags"),
    },
  ];

  return (
    <>
      <Card className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              {filters.map(({ title, active, onClick, icon }) => (
                <Button
                  key={title}
                  className={classNames(
                    styles.filterButton,
                    active && styles.active,
                  )}
                  onClick={onClick}
                >
                  <Icon name={icon} className="stroke-2" />
                </Button>
              ))}
            </div>
          </div>
        </form>
      </Card>

      <MobileOnlyView className="w-full">
        <MobileTrends />
      </MobileOnlyView>

      {filter == "users" && <Users user={result?.user} />}
      {filter == "tags" && <Tags tag={result?.tag} />}
    </>
  );
}
