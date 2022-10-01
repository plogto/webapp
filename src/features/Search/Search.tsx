import { isMobile, MobileOnlyView } from "react-device-detect";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Button } from "@components/Buttons/Button";
import { Card } from "@components/Card";
import { Icon } from "@components/Icon";
import { MobileTrends } from "../Trends";
import styles from "./Search.module.css";
import type { Filter } from "./Search.types";
import { Tags, Users } from "./components";
import { Posts } from "./components/Posts";
import { useSearch } from "./hooks";
import isEmpty from "lodash/isEmpty";

export function Search() {
  const { formMethods, onSubmit, result, filter, setFilter } = useSearch();
  const { register, handleSubmit, watch, getValues } = formMethods;

  const { t } = useTranslation(["common", "search"]);
  const filters: Filter[] = [
    {
      title: t("common:users"),
      active: filter === "users",
      icon: "Users",
      onClick: () => setFilter("users"),
    },
    {
      title: t("common:tags"),
      active: filter === "tags",
      icon: "Hashtag",
      onClick: () => setFilter("tags"),
    },
  ];

  return (
    <div className={styles.search}>
      <div className={styles.header}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card shadow={!isMobile} rounded={!isMobile} className={styles.card}>
            <div className={styles.inputWrapper}>
              <input
                {...register("expression")}
                onInput={handleSubmit(() => onSubmit(getValues()))}
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
          </Card>
        </form>
      </div>
      <div className={styles.content}>
        {isEmpty(watch("expression")) ? (
          <>
            <MobileOnlyView className="w-full">
              <MobileTrends />
            </MobileOnlyView>
            <Posts />
          </>
        ) : (
          <div>
            {filter === "users" && <Users user={result?.user} />}
            {filter === "tags" && <Tags tag={result?.tag} />}
          </div>
        )}
      </div>
    </div>
  );
}
