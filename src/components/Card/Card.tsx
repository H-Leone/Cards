import { useModalStore } from "../../store/use-modal";
import ToggleButton from "../ToggleButton/ToggleButton";
import { FiX } from "react-icons/fi";

interface CardProps {
  index: number;
  name: string;
}

export default function Card({ index, name }: CardProps) {
    const toggle = useModalStore(s => s.toggleRemoveIsOpen);
    const setDataToRemove = useModalStore(s => s.setDataToRemove);
    return (
        <div
        style={{ backgroundColor: "red", width: "150px", position: "relative" }}
        >
        <p>{name}</p>
        <ToggleButton index={index} name={name} />
        <div
            style={{ position: "absolute", top: 7, right: 7, cursor: "pointer" }}
            onClick={(e) => {
                setDataToRemove(name);
                toggle();
            }}
        >
            <FiX></FiX>
        </div>
        </div>
    );
}
