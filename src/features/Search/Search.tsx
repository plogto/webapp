import { isMobile, MobileOnlyView } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { SearchFilters } from "@enums";
import { Card } from "@components/Card";
import { MobileTrends } from "../Trends";
import styles from "./Search.module.css";
import { Tags, Users } from "./components";
import { Posts } from "./components/Posts";
import { useSearch } from "./hooks";
import isEmpty from "lodash/isEmpty";

export function Search() {
  const { formMethods, onSubmit, result, filter } = useSearch();
  const { register, handleSubmit, watch, getValues } = formMethods;

  const { t } = useTranslation(["common", "search"]);

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
            {filter === SearchFilters.USERS && <Users user={result?.user} />}
            {filter === SearchFilters.TAGS && <Tags tag={result?.tag} />}
          </div>
        )}
      </div>
    </div>
  );
}
