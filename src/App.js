import React, { useEffect, useState } from "react";
import { Container } from "./components/Container";
// import { Alert } from "./components/Alert";

function App() {
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime().toString();
    if (input !== "") {
      setList([...list, { id, input }]);
      setShow(true);
      setInput("");
    } else {
      alert("nije dobro ukucan input");
    }
  };

  const editInput = (e) => {
    e.preventDefault();
    let idItem = e.currentTarget.parentNode.parentNode;
    let value = e.currentTarget.value;
    console.log(value);
  };

  return (
    <>
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {/* <Alert /> */}
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
              submit
            </button>
          </div>
        </form>
        {show && (
          <Container
            list={list}
            setList={setList}
            setShow={setShow}
            editInput={editInput}
          />
        )}
      </section>
    </>
  );
}

export default App;
