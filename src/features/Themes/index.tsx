import classNames from "classnames";
import { v4 as uuid } from "uuid";
import styles from "./Themes.module.css";
import { useThemes } from "./hooks/useThemes";
import { Button } from "@components/Buttons/Button";
import { Card } from "@components/Card";
import { PageHeader } from "@components/PageHeader";

export function Themes() {
  const { mounted, t, themeColor, COLORS, THEMES } = useThemes();

  if (!mounted) return null;

  return (
    <form className={styles.themes}>
      <Card>
        <PageHeader title={t("texts.themes")} />
        <div className="flex flex-col space-y-8 p-3 md:p-5">
          <div className={styles.colorsContainer}>
            {COLORS.map(({ onClick, className }) => (
              <Button
                key={uuid()}
                onClick={onClick}
                className={classNames(styles.colorButton, className)}
              />
            ))}
          </div>
          <div className={styles.themesContainer}>
            {THEMES.map(({ key, title, onClick, className }) => (
              <Button
                key={uuid()}
                onClick={onClick}
                className={classNames(
                  styles.themeButton,
                  key === themeColor && styles.active,
                  className,
                )}
              >
                {title}
                {key === themeColor && <span className={styles.badge}></span>}
              </Button>
            ))}
          </div>
        </div>
      </Card>
    </form>
  );
}
