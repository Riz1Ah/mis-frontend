import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Message from "./components/Message";
import produce from "immer";

function App() {
  const handleOnSelect = (item: string) => console.log(item);
  // return ( <ListGroup items={["London", "Paris", "NY", "LA", "San Fransisco"]} heading={"Cities"} onSelectItem={handleOnSelect}/> );

  const [alertState, setAlertState] = useState(0);
  const onClickHandler = () => {
    setAlertState(1);
  };
  const onClickCloseHandler = () => {
    setAlertState(0);
  };

  const [immerVar, setImmerVar] = useState([
    { id: 1, bug: false },
    { id: 2, bug: false },
  ]);

  const showImmerOutput = () => {
    const item = immerVar.find((item) => item.id === 1);
    console.log(item ? item.bug : null);
  };

  const useImmer = () => {
    // setImmerVar(immerVar.map(item => item.id===1? {...item, bug:true}: item))
    setImmerVar(
      produce((draft) => {
        const iv = draft.find((iv) => iv.id === 1);
        if (iv) iv.bug = true;
      })
    );
  };

  return (
    <>
      {alertState === 1 && (
        <Alert
          children="What Have You Done!!"
          onClickClose={onClickCloseHandler}
        />
      )}
      <Button
        children="Dont Click Here"
        color={"primary"}
        onclickHandle={onClickHandler}
      />
      <ListGroup
        items={["London", "Paris", "NY", "LA", "San Fransisco"]}
        heading={"Cities"}
        onSelectItem={handleOnSelect}
      />

      <button onClick={useImmer}> ImmerUsage</button>
      {immerVar.map((iv) => (
        <p key={iv.id}>
          {iv.id} {iv.bug ? "Fixed" : "Bug"}
        </p>
      ))}
    </>
  );
}

export default App;
