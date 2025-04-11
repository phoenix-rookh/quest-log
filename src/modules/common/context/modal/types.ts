import React from "react";

export type ModalMapType = {
  addQuest: React.FC;
};

export type ActiveModal = {
  name: keyof ModalMapType;
  props?: object;
};

export type Context = {
  activeModal: ActiveModal | null;
  open: (modal: ActiveModal) => void;
  hide: () => void;
};
