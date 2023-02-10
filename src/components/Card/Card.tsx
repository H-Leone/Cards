import { useModalStore } from "../../store/use-modal";
import ToggleButton from "../ToggleButton/ToggleButton";

interface CardProps {
    index: number;
    name: string;
}

export default function Card({ index, name }: CardProps) {
    return (
        <div style={{ backgroundColor: 'red', width: '150px' }}>
            <p>{name}</p>
            <ToggleButton index={index} name={name} />
        </div>
    )
}