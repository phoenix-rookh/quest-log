import { useTranslation } from "react-i18next";

interface LandingPageProps {
  onSignIn: () => void;
  onGuest: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onSignIn, onGuest }) => {
  const { t } = useTranslation(["common", "landing"]);

  return (
    <div className="min-h-[calc(100vh-74px)] bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center gap-8">
        <div className="lg:pr-16 max-w-[500px]">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {t("heroText", { ns: "landing" })}
            <p className="text-indigo-600">{t("appName", { ns: "common" })}</p>
          </h1>
          <p className="text-xl text-gray-600 mb-8">{t("subText", { ns: "landing" })}</p>
          <div className="space-x-4">
            <button
              onClick={onSignIn}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer"
            >
              {t("signIn", { ns: "common" })}
            </button>
            <button
              onClick={onGuest}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 cursor-pointer"
            >
              {t("continueAsGuest", { ns: "landing" })}
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="/assets/landing/scroll.png" alt="Gamified Task Management" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};
