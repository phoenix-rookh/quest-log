import { useContext } from "react";
import { ThemeContext } from "../common/context/theme/ThemeContext";

export const QuestBoard = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-grow p-6 space-x-4">
        <div className={`${theme.bgSecondary} rounded-md shadow-md flex-1 overflow-y-auto p-4`}>
          <h2 className={`${theme.textSecodary} text-lg font-semibold mb-2`}>Journal</h2>
        </div>
        <div className={`${theme.bgSecondary} rounded-md shadow-md flex-1 overflow-y-auto p-4`}>
          <h2 className={`${theme.textSecodary} text-lg font-semibold mb-2`}>In progress</h2>
        </div>
        <div className={`${theme.bgSecondary} rounded-md shadow-md flex-1 overflow-y-auto p-4`}>
          <h2 className={`${theme.textSecodary} text-lg font-semibold mb-2`}>Done</h2>
        </div>
      </main>
    </div>
  );
};
