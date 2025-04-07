import { useContext } from "react";
import { ThemeContext } from "../../context/theme/ThemeContext";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);
  const { t } = useTranslation("common");

  return (
    <header className={`${theme.bgSecondary} ${theme.textPrimary} shadow py-4 px-6 flex items-center justify-between`}>
      <div className="text-xl font-semibold">{t("appName")}</div>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className={`${theme.themeSwitch} rounded-full w-10 h-5 flex items-center transiti transition-all duration-300 cursor-pointer`}
        >
          <div className={`w-4 h-4 rounded-full bg-white shadow-md`}></div>
        </button>
        <button className={`rounded-md border ${theme.outline} py-2 px-4 cursor-pointer`}>{t("signIn")}</button>
      </div>
    </header>
  );
};
