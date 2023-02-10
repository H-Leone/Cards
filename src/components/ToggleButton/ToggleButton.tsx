import { useModalStore } from "../../store/use-modal"

interface ToggleButtonProps {
    index: number;
    name: string;
}

export default function ToggleButton({ index, name }: ToggleButtonProps) {
    const toggleEditIsOpen = useModalStore(store => store.toggleEditIsOpen)
    const setIndexToEdit = useModalStore(store => store.setIndexToEdit)

    return (
        <div>
            <button onClick={() => { toggleEditIsOpen(); setIndexToEdit(index) }}>Editar</button>
        </div>
    )
}