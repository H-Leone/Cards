import { FiX } from "react-icons/fi";
import { useModalStore } from "../../store/use-modal";

interface RemoveModalProps {
    name: string;
}

export default function RemoveModal({ name }: RemoveModalProps) {
  const toggle = useModalStore((s) => s.toggleRemoveIsOpen);
  const nameList = useModalStore(s => s.nameList);
  const updateNameList = useModalStore(s => s.updateNameList);
  const setDataToRemove = useModalStore(s => s.setDataToRemove);

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
        zIndex: 1000,
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h3>Desejar excluir o card?</h3>

        <div
          style={{
            display: "flex",
            width: "90%",
            justifyContent: "space-around",
          }}
        >
          <div style={{
            cursor: "pointer",
            padding: "10px 15px",
            transitionDuration: ".7s",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            backgroundColor: '#BBFFCF'
          }}
          onClick={() => {
            let tempList = [...nameList].filter(el => el !== name)
            updateNameList(tempList);
            toggle();
          }}
          >Confirmar</div>

          <div style={{
            cursor: "pointer",
            padding: "10px 15px",
            transitionDuration: ".7s",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLDivElement).style.backgroundColor = "#FFCBCB";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLDivElement).style.backgroundColor = "transparent";
          }}
          onClick={() => {
            toggle();
            setDataToRemove('');
          }}
          >Cancelar</div>
        </div>

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
            setDataToRemove('');
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
