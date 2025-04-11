import { useTheme } from "@/modules/common/context/theme/ThemeContext";
import { Button } from "@/modules/common/components/button";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const theme = useTheme();
  const { t } = useTranslation("common");

  return (
    <header className={`${theme.bgSecondary} ${theme.textPrimary} shadow py-4 px-6 flex items-center justify-between`}>
      <div className="text-xl font-semibold">{t("appName")}</div>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className={`${theme.themeSwitch} rounded-full w-10 h-5 flex items-center cursor-pointer`}
        >
          <div className={`w-4 h-4 rounded-full bg-white shadow-md`}></div>
        </button>
        <Button appearance="outlined">{t("signIn")}</Button>
      </div>
    </header>
  );
};
