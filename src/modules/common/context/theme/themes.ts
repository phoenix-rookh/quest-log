import { Theme } from "./types";

export const lightTheme: Theme = {
  bgPrimary: "bg-zinc-100",
  bgSecondary: "bg-white",
  textPrimary: "text-zinc-800",
  textSecodary: "text-zinc-700",
  textAccent: "text-indigo-600",
  outline: "border-indigo-400 text-indigo-700 hover:bg-indigo-100",
  themeSwitch: "bg-gray-300 justify-start",
  btnContained: "bg-indigo-600 hover:bg-indigo-700 text-white",
  btnOutlined: "bg-transparent border border-indigo-600 hover:bg-indigo-50 text-indigo-600",
  btnText: "bg-transparent hover:bg-indigo-50 text-indigo-600",
  btnIcon: "hover:bg-indigo-50 text-indigo-600",
};

export const darkTheme: Theme = {
  bgPrimary: "bg-zinc-900",
  bgSecondary: "bg-zinc-800",
  textPrimary: "text-zinc-200",
  textSecodary: "text-zinc-200",
  textAccent: "text-indigo-500",
  outline: "border-indigo-600 text-indigo-300 hover:bg-indigo-800",
  themeSwitch: "bg-gray-600 justify-end",
  btnContained: "bg-indigo-500 hover:bg-indigo-400 text-white",
  btnOutlined: "bg-transparent border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-indigo-200",
  btnText: "bg-transparent text-indigo-400 hover:bg-indigo-500",
  btnIcon: "text-indigo-400 hover:bg-indigo-500",
};
