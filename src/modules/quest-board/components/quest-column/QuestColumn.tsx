import { useTheme } from "@/modules/common/context/theme";

interface QuestColumnProps {
  title: string;
}

export const QuestColumn: React.FC<QuestColumnProps> = ({ title }) => {
  const theme = useTheme();

  return (
    <div className={`${theme.bgSecondary} rounded-md shadow-md flex-1 flex flex-col`}>
      <h2 className={`${theme.textSecodary} text-lg font-semibold mb-2 p-4 pb-0`}>{title}</h2>
      <div className="overflow-y-auto p-4 h-0" style={{ flexGrow: 1 }}>
        {/* Column content */}
      </div>
    </div>
  );
};
