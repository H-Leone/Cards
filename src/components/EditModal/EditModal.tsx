import { useCallback, useEffect, useRef } from "react";
import { useModalStore } from "../../store/use-modal";
import { FiX } from "react-icons/fi";

interface EditModalProps {
  indexToEdit: number;
}

export default function EditModal({ indexToEdit }: EditModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const nameList = useModalStore((store) => store.nameList);
  const updateNameList = useModalStore((store) => store.updateNameList);
  const toggle = useModalStore((store) => store.toggleEditIsOpen);

  const handleKeyDown = useCallback((key: string, value: string) => {
    if (key.toLowerCase() === "enter") {
      let tempList = [...nameList];
      tempList.splice(indexToEdit, 1, value);
      updateNameList(tempList);
      toggle();
    }
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "15px",
        zIndex: 1000
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          position: "relative",
          width: "20%",
          height: "20%",
          borderRadius: "15px",
          boxShadow: "1px 1px 8px black",
        }}
      >
        <h3>Insira um novo nome:</h3>
        <input
          type="text"
          ref={inputRef}
          onKeyDown={(e) =>
            handleKeyDown(e.key, (e.target as HTMLInputElement).value)
          }
          style={{
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            borderBottom: "2px solid green",
            outline: "none",
            padding: '8px'
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            width: "15px",
            height: "15px",
            cursor: "pointer",
            padding: "5px",
            transitionDuration: ".7s",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
          }}
          onClick={() => {
            toggle();
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLDivElement).style.backgroundColor = "#DAFFE3";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLDivElement).style.backgroundColor = "transparent";
          }}
        >
          <FiX></FiX>
        </div>
      </div>
    </div>
  );
}
