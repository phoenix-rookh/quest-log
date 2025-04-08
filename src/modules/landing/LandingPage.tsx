import { useTranslation } from "react-i18next";
import { Button } from "../common/components/button";

interface LandingPageProps {
  onSignIn: () => void;
  onGuest: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onSignIn, onGuest }) => {
  const { t } = useTranslation(["common", "landing"]);

  return (
    <div className="min-h-[calc(100vh-82px)] bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center gap-8">
        <div className="lg:pr-16 max-w-[500px]">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {t("heroText", { ns: "landing" })}
            <p className="text-indigo-600">{t("appName", { ns: "common" })}</p>
          </h1>
          <p className="text-xl text-gray-600 mb-8">{t("subText", { ns: "landing" })}</p>
          <div className="space-x-4">
            <Button onClick={onSignIn}>{t("signIn", { ns: "common" })}</Button>
            <Button onClick={onGuest} appearance="outlined">
              {t("continueAsGuest", { ns: "landing" })}
            </Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="/assets/landing/scroll.png" alt="Gamified Task Management" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};
