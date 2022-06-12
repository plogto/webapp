import { isMobile } from "react-device-detect";
import classNames from "classnames";
import { v4 as uuid } from "uuid";
import { Button } from "@components/Buttons/Button";
import { Card } from "@components/Card";
import styles from "./Themes.module.css";
import { PreviewPost } from "./components/PreviewPost";
import { useThemes } from "./useThemes";

export function Themes() {
  const { mounted, backgroundColor, COLORS, THEMES } = useThemes();

  if (!mounted) return null;

  return (
    <form className={styles.themes}>
      <Card shadow={!isMobile} rounded={!isMobile}>
        <div className="flex flex-col space-y-6 my-1 p-3 md:p-4">
          <PreviewPost />
          <div>
            <div className={styles.label}>Color</div>
            <div className={styles.colorsWrapper}>
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
            <div className={styles.themesWrapper}>
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
