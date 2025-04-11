import { IconButton } from "@/modules/common/components/button/IconButton";
import { useModal } from "@/modules/common/context/modal";
import { useTheme } from "@/modules/common/context/theme";
import { useOutsideClick } from "@/modules/common/hooks/useOutsideClick";
import { PropsWithChildren, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ModalsMap } from "@/modules/common/context/modal/modals";
import { createPortal } from "react-dom";

export const Modal = ({ children }: PropsWithChildren) => {
  const { hide } = useModal();
  const theme = useTheme();
  const contentRef = useRef(null);

  useOutsideClick(contentRef, hide);

  return (
    <div className="fixed inset-0 bg-zinc-900/50 flex items-center justify-center z-50" role="dialog">
      <div className={`${theme.bgPrimary} rounded-lg shadow-lg p-6 max-w-[800px]`}>
        <div className="max-h-[80vh] overflow-y-auto" ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  );
};

interface ModalTitleProps {
  title: string;
}

export const ModalTitle: React.FC<ModalTitleProps> = ({ title }) => {
  const theme = useTheme();
  const { t } = useTranslation("modal");
  const { hide } = useModal();

  return (
    <div className="flex justify-between items-center p-2">
      <h2 className={`${theme.textPrimary} font-semibold text-2xl`}>{title}</h2>
      <IconButton icon="close" title={t("close")} onClick={hide} size="md" />
    </div>
  );
};

export const ModalBody: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="max-h-[60vh] overflow-y-auto p-2">{children}</div>;
};

export const ModalRoot = () => {
  const { activeModal } = useModal();

  if (!activeModal) {
    return null;
  }

  const Component = ModalsMap[activeModal.name];

  return createPortal(<Component {...activeModal.props} />, document.getElementById("modal-root")!);
};
