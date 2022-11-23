import React, { useEffect, useState } from "react";
import { Container } from "./components/Container";
import { Alert } from "./components/Alert";
import text from "./shared/messages";

function App() {
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [list, setList] = useState([]);

  const [edit, setEdit] = useState(false);
  const [idVar, setIdVar] = useState("");
  const [alertText, setAlertText] = useState(false);
  const [message, setMessage] = useState("");
  const [danger, setDanger] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!edit) {
      const id = new Date().getTime().toString();
      if (input !== "") {
        setList([...list, { id, input }]);

        setShow(true);
        setMessage(text.success.add);
        setDanger(true);
        setAlertText(true);
        setInput("");
      } else {
        setMessage(text.danger.enter);
        setDanger(false);
        setAlertText(true);
      }
    }
    if (edit) {
      list.find((item) => item.id === idVar).input = input;
      setMessage(text.success.edit);
      setDanger(true);
      setAlertText(true);
      setInput("");
      setEdit(false);
    }
  };

  const deleteItem = (e) => {
    e.preventDefault();
    let idItem = e.currentTarget.parentNode.parentNode.id;
    let newList = list.filter((item) => item.id !== idItem);
    if (newList.length === 0) {
      setList(newList);
      setShow(false);
      setMessage(text.danger.empty);
      setDanger(false);
      setAlertText(true);
    } else {
      setList(newList);
      setMessage(text.danger.removed);
      setDanger(false);
      setAlertText(true);
    }
  };

  const editInput = (e) => {
    e.preventDefault();
    let idItem = e.currentTarget.parentNode.parentNode.id;
    let value = e.currentTarget.value;
    setInput(value);
    setIdVar(idItem);
    setEdit(true);
  };

  useEffect(() => {
    const time = setInterval(() => {
      setAlertText(false);
      return clearInterval(time);
    }, 6000);
  }, [alertText]);

  return (
    <>
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alertText && <Alert message={message} danger={danger} />}
          <h3>grocery bud</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="e.g. eggs"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {edit ? "edit" : "submit"}
            </button>
          </div>
        </form>
        {show && (
          <Container
            setMessage={setMessage}
            setDanger={setDanger}
            setAlertText={setAlertText}
            list={list}
            setList={setList}
            setShow={setShow}
            editInput={editInput}
            deleteItem={deleteItem}
          />
        )}
      </section>
    </>
  );
}

export default App;
