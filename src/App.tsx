import { useState } from "react";

type Theme = {
  bgPrimary: string;
  bgSecondary: string;
  textPrimary: string;
  textSecodary: string;
  outline: string;
};

const lightTheme: Theme = {
  bgPrimary: "bg-zinc-100",
  bgSecondary: "bg-white",
  textPrimary: "text-zinc-800",
  textSecodary: "text-zinc-700",
  outline: "border-indigo-400 text-indigo-700 hover:bg-indigo-100",
};

const darkTheme: Theme = {
  bgPrimary: "bg-zinc-900",
  bgSecondary: "bg-zinc-800",
  textPrimary: "text-zinc-200",
  textSecodary: "text-zinc-200",
  outline: "border-indigo-600 text-indigo-300 hover:bg-indigo-800",
};

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${currentTheme.bgPrimary} ${currentTheme.textPrimary} min-h-screen flex flex-col`}>
      <header className={`${currentTheme.bgSecondary} shadow py-4 px-6 flex items-center justify-between`}>
        <div className="text-xl font-semibold">Quest Log</div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className={`rounded-full w-10 h-5 flex items-center transiti transition-all duration-300 ${isDarkMode ? "bg-gray-600 justify-end" : "bg-gray-300 justify-start"} cursor-pointer`}
          >
            <div className={`w-4 h-4 rounded-full bg-white shadow-md`}></div>
          </button>
          <button className={`rounded-md border ${currentTheme.outline} py-2 px-4 cursor-pointer`}>Sign in</button>
        </div>
      </header>
      <main className="flex flex-grow p-6 space-x-4">
        <div className={`${currentTheme.bgSecondary} rounded-md shadow-md flex-1 overflow-y-auto p-4`}>
          <h2 className={`${currentTheme.textSecodary} text-lg font-semibold mb-2`}>Journal</h2>
        </div>
        <div className={`${currentTheme.bgSecondary} rounded-md shadow-md flex-1 overflow-y-auto p-4`}>
          <h2 className={`${currentTheme.textSecodary} text-lg font-semibold mb-2`}>In progress</h2>
        </div>
        <div className={`${currentTheme.bgSecondary} rounded-md shadow-md flex-1 overflow-y-auto p-4`}>
          <h2 className={`${currentTheme.textSecodary} text-lg font-semibold mb-2`}>Done</h2>
        </div>
      </main>
    </div>
  );
};
