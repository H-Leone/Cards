import { useModalStore } from "../../store/use-modal";
import  ToggleButton from "../ToggleButton/ToggleButton";
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
        style={{ boxShadow: '1px 1px 8px rgba(0, 0, 0, 0.4)', width: "200px", height: '100px', position: "relative", borderRadius: '7px' }}
        >
        <p>{name}</p>
        <div style={{ position: 'absolute', top: 7, right: 27, cursor: 'pointer' }}>
            <ToggleButton index={index} />
        </div>
        <div
            style={{ position: "absolute", top: 7, right: 7, cursor: "pointer" }}
            onClick={() => {
                setDataToRemove(name);
                toggle();
            }}
        >
            <FiX></FiX>
        </div>
        </div>
    );
}
