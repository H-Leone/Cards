import create from "zustand";

interface ModalStore {
    name: string;
    setName: (name: string) => void; 

    isOpen: boolean;
    toggleIsOpen: () => void;

    nameList: string[];
    setNameList: (name: string, nameList: string[]) => void;
    updateNameList: (list: string[]) => void;

    indexToEdit: number;
    setIndexToEdit: (index: number) => void;
}

export const useModalStore = create<ModalStore>((set, get) => ({
    name: '',
    setName: name => set({ name: name }),
    isOpen: false,
    toggleIsOpen: () => set(({ isOpen }) => ({ isOpen: !isOpen })),
    nameList: [],
    setNameList: (name, nameList) => set({ nameList: [...nameList, name] }),
    updateNameList: list => set({ nameList: list }),
    indexToEdit: 0,
    setIndexToEdit: (index) => set({ indexToEdit: index }) 
}))