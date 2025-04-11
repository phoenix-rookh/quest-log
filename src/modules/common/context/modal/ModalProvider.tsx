import { ModalContext } from "@/modules/common/context/modal/ModalContext";
import { ActiveModal } from "@/modules/common/context/modal/types";
import { PropsWithChildren, useState } from "react";

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [activeModal, setActiveModal] = useState<ActiveModal | null>(null);

  const open = (modal: ActiveModal) => {
    setActiveModal(modal);
  };

  const hide = () => {
    setActiveModal(null);
  };

  return <ModalContext.Provider value={{ activeModal, open, hide }}>{children}</ModalContext.Provider>;
};
