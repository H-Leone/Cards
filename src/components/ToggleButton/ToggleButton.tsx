import { useModalStore } from "../../store/use-modal"
import { FiEdit } from "react-icons/fi";

interface ToggleButtonProps {
    index: number;
}

export default function ToggleButton({ index }: ToggleButtonProps) {
    const toggleEditIsOpen = useModalStore(store => store.toggleEditIsOpen)
    const setIndexToEdit = useModalStore(store => store.setIndexToEdit)

    return (
        <div>
            <FiEdit onClick={() => { toggleEditIsOpen(); setIndexToEdit(index) }} style={{ cursor: 'pointer' }} />
        </div>
    )
}