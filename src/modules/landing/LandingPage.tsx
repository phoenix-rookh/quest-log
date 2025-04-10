import { useTranslation } from "react-i18next";
import { Button } from "@/modules/common/components/button";
import { useContext } from "react";
import { ThemeContext } from "../common/context/theme/ThemeContext";

interface LandingPageProps {
  onSignIn: () => void;
  onGuest: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onSignIn, onGuest }) => {
  const { t } = useTranslation(["common", "landing"]);
  const theme = useContext(ThemeContext);

  return (
    <div
      className={`${theme.bgPrimary} min-h-[calc(100vh-82px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-7xl mx-auto flex items-center gap-8">
        <div className="lg:pr-16 max-w-[500px]">
          <h1 className={`${theme.textPrimary} text-5xl font-bold mb-6`}>
            {t("heroText", { ns: "landing" })}
            <p className={`${theme.textAccent}`}>{t("appName", { ns: "common" })}</p>
          </h1>
          <p className={`${theme.textSecodary} text-xl mb-8`}>{t("subText", { ns: "landing" })}</p>
          <div className="space-x-4">
            <Button onClick={onSignIn}>{t("signIn", { ns: "common" })}</Button>
            <Button onClick={onGuest} appearance="outlined">
              {t("continueAsGuest", { ns: "landing" })}
            </Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src="/assets/landing/scroll.png"
            alt="Gamified Task Management"
            className="rounded-lg"
            width="500"
            height="500"
          />
        </div>
      </div>
    </div>
  );
};
