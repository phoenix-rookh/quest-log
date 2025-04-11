import { Context } from "./types";
import { createContext, useContext } from "react";

export const ModalContext = createContext({} as Context);

export const useModal = () => useContext(ModalContext);
