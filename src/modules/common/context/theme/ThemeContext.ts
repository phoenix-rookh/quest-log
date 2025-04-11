import { createContext, useContext } from "react";
import { lightTheme } from "./themes";
import { Theme } from "./types";

export const ThemeContext = createContext<Theme>(lightTheme);

export const useTheme = () => useContext(ThemeContext);
