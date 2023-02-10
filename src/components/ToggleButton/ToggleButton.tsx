import { useModalStore } from "../../store/use-modal"

interface ToggleButtonProps {
    index: number;
    name: string;
}

export default function ToggleButton({ index, name }: ToggleButtonProps) {
    const toggleIsOpen = useModalStore(store => store.toggleIsOpen)
    const setIndexToEdit = useModalStore(store => store.setIndexToEdit)

    return (
        <div>
            <button onClick={() => { toggleIsOpen(); setIndexToEdit(index) }}>Editar</button>
        </div>
    )
}