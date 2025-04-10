import { createBrowserRouter } from "react-router";
import { QuestBoard } from "@/modules/quest-board";
import { App } from "./App";

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
