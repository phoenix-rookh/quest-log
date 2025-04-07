import { Theme } from "./types/theme";

export const lightTheme: Theme = {
  bgPrimary: "bg-zinc-100",
  bgSecondary: "bg-white",
  textPrimary: "text-zinc-800",
  textSecodary: "text-zinc-700",
  outline: "border-indigo-400 text-indigo-700 hover:bg-indigo-100",
  themeSwitch: "bg-gray-300 justify-start",
};

export const darkTheme: Theme = {
  bgPrimary: "bg-zinc-900",
  bgSecondary: "bg-zinc-800",
  textPrimary: "text-zinc-200",
  textSecodary: "text-zinc-200",
  outline: "border-indigo-600 text-indigo-300 hover:bg-indigo-800",
  themeSwitch: "bg-gray-600 justify-end",
};
