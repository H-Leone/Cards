import create from "zustand";

interface ModalStore {
    name: string;
    setName: (name: string) => void; 

    editIsOpen: boolean;
    toggleEditIsOpen: () => void;

    nameList: string[];
    setNameList: (name: string, nameList: string[]) => void;
    updateNameList: (list: string[]) => void;

    indexToEdit: number;
    setIndexToEdit: (index: number) => void;

    dataToRemove: string;
    setDataToRemove: (data: string) => void;

    removeIsOpen: boolean;
    toggleRemoveIsOpen: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
    name: '',
    setName: name => set({ name: name }),
    editIsOpen: false,
    toggleEditIsOpen: () => set(({ editIsOpen }) => ({ editIsOpen: !editIsOpen })),
    nameList: [],
    setNameList: (name, nameList) => set({ nameList: [...nameList, name] }),
    updateNameList: list => set({ nameList: list }),
    indexToEdit: 0,
    setIndexToEdit: (index) => set({ indexToEdit: index }),
    dataToRemove: '',
    setDataToRemove: data => set({ dataToRemove: data }),
    removeIsOpen: false,
    toggleRemoveIsOpen: () => set(({ removeIsOpen }) => ({ removeIsOpen: !removeIsOpen }))
}))