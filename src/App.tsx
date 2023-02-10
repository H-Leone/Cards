import "./App.css";
import EditModal from "./components/EditModal/EditModal";
import { useModalStore } from "./store/use-modal";
import { useCallback, useEffect } from "react";
import Card from "./components/Card/Card";
import RemoveModal from "./components/RemoveModal/RemoveModal";

function App() {
  const editIsOpen = useModalStore((s) => s.editIsOpen);
  const setName = useModalStore((s) => s.setName);
  const name = useModalStore((s) => s.name);
  const nameList = useModalStore((s) => s.nameList);
  const setNameList = useModalStore((s) => s.setNameList);
  const indexToEdit = useModalStore((s) => s.indexToEdit);
  const removeIsOpen = useModalStore(s => s.removeIsOpen)
  const dataToRemove = useModalStore(s => s.dataToRemove);

  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <div style={{ margin: '25px' }}>
          <input
            type="text"
            onChange={(e) => setName((e.target as HTMLInputElement).value)}
            onKeyDown={(e) => {
              if (
                e.key.toLowerCase() === "enter" &&
                (e.target as HTMLInputElement).value !== ""
              ) {
                setNameList(name, nameList);
                (e.target as HTMLInputElement).value = "";
              }
            }}
            style={{ borderRadius: '15px', border: '2px solid green', padding: '15px' }}
          />
        </div>
        {editIsOpen && (
          <EditModal indexToEdit={indexToEdit} />
        )}
        {removeIsOpen && (
          <RemoveModal name={dataToRemove} />
        )}
        <div style={{ width: '100%', display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {nameList.map((el, index) => (
            <Card name={el} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
