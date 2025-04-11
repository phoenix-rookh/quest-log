import { useState } from "react";
import { LandingPage } from "./modules/landing";
import { darkTheme, lightTheme } from "@/modules/common/context/theme/themes";
import { ThemeContext } from "@/modules/common/context/theme/ThemeContext";
import { Header } from "@/modules/common/components/header";
import { ModalProvider } from "@/modules/common/context/modal";
import { ModalRoot } from "@/modules/common/components/modal";

export const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <ModalProvider>
        <Header toggleTheme={toggleTheme} />
        <LandingPage onGuest={() => {}} onSignIn={() => {}} />
        <ModalRoot />
      </ModalProvider>
    </ThemeContext.Provider>
  );
};
