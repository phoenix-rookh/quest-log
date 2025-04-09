import { createContext } from "react";
import { lightTheme } from "./themes";
import { Theme } from "./types/theme";

export const ThemeContext = createContext<Theme>(lightTheme);
