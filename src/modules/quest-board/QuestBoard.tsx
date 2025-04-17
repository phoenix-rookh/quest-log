import { QuestColumn } from "@/modules/quest-board/components/quest-column";

export const QuestBoard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-grow p-6 space-x-4 overflow-hidden">
        <QuestColumn title="Journal" />
        <QuestColumn title="In progress" />
        <QuestColumn title="Finished" />
      </main>
    </div>
  );
};
