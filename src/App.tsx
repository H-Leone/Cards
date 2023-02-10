import "./App.css";
import EditModal from "./components/EditModal/EditModal";
import { useModalStore } from "./store/use-modal";
import { useCallback, useEffect } from "react";
import Card from "./components/Card/Card";

function App() {
  const isOpen = useModalStore((store) => store.isOpen);
  const setName = useModalStore((store) => store.setName);
  const name = useModalStore((store) => store.name);
  const nameList = useModalStore((store) => store.nameList);
  const setNameList = useModalStore((store) => store.setNameList);
  const indexToEdit = useModalStore((store) => store.indexToEdit);

  useEffect(() => console.log(nameList), [nameList]);

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
        {isOpen && (
          <EditModal indexToEdit={indexToEdit} />
        )}
        <div style={{ width: '100%', display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {nameList.map((el, index) => (
            <Card name={el} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
