import { useState } from "react";
import { LandingPage } from "./modules/landing";
import { darkTheme, lightTheme } from "./modules/common/context/theme/themes";
import { ThemeContext } from "./modules/common/context/theme/ThemeContext";
import { Header } from "./modules/common/components/header";

export const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Header toggleTheme={toggleTheme} />
      <LandingPage onGuest={() => {}} onSignIn={() => {}} />
    </ThemeContext.Provider>
  );
};
