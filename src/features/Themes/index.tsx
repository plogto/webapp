import classNames from "classnames";
import { v4 as uuid } from "uuid";
import styles from "./Themes.module.css";
import { PreviewPost } from "./components/PreviewPost";
import { useThemes } from "./hooks/useThemes";
import { Button } from "@components/Buttons/Button";
import { Card } from "@components/Card";
import { PageHeader } from "@components/PageHeader";

export function Themes() {
  const { mounted, t, backgroundColor, COLORS, THEMES } = useThemes();

  if (!mounted) return null;

  return (
    <form className={styles.themes}>
      <Card>
        <PageHeader title={t("texts.themes")} />
        <div className="flex flex-col space-y-8 my-1 p-3 md:p-5">
          <PreviewPost />
          <div>
            <div className={styles.label}>Color</div>
            <div className={styles.colorsContainer}>
              {COLORS.map(({ onClick, className }) => (
                <Button
                  key={uuid()}
                  onClick={onClick}
                  className={classNames(styles.colorButton, className)}
                />
              ))}
            </div>
          </div>
          <div>
            <div className={styles.label}>Background</div>
            <div className={styles.themesContainer}>
              {THEMES.map(({ key, title, onClick, className }) => (
                <Button
                  key={uuid()}
                  onClick={onClick}
                  className={classNames(
                    styles.themeButton,
                    key === backgroundColor && styles.active,
                    className,
                  )}
                >
                  {title}
                  {key === backgroundColor && (
                    <span className={styles.badge}></span>
                  )}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </form>
  );
}
