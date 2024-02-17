import { TConductorInstance } from "react-canvas-confetti/dist/types";
import { create } from "zustand";

type GlonalsVariablesType = {
  isOpenModal: boolean;
  onOpenModal: () => void;
  onCloseModal: () => void;

  isOpenModalViewMap: boolean;
  onOpenModalViewMap: () => void;
  onCloseModalViewMap: () => void;

  currentUser: string;
  isOpenModalPinAccess: boolean;
  onOpenModalPinAccess: (currentUser: string) => void;
  onCloseModalPinAccess: () => void;
  
  // permissionAccess: boolean;
  // onChangeModalPinAccess: () => void;
};

export const useGlobalsVariables = create<GlonalsVariablesType>((set, get) => ({
  isOpenModal: false,
  onOpenModal: () => set({ isOpenModal: true }),
  onCloseModal: () => set({ isOpenModal: false }),
  
  isOpenModalViewMap: false,
  onOpenModalViewMap: () => set({ isOpenModalViewMap: true }),
  onCloseModalViewMap: () => set({ isOpenModalViewMap: false }),
  
  currentUser: "",
  isOpenModalPinAccess: false,
  onOpenModalPinAccess: (currentUser) => set({ isOpenModalPinAccess: true, currentUser }),
  onCloseModalPinAccess: () => set({ isOpenModalPinAccess: false }),
}));
