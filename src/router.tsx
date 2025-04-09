import { createBrowserRouter } from "react-router";
import { App } from "./App";
import { QuestBoard } from "./modules/quest-board";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "quests",
    element: <QuestBoard />,
  },
]);
