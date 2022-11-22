import React, { useEffect, useState } from "react";
import { Container } from "./components/Container";
// import { Alert } from "./components/Alert";

function App() {
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "") {
      setList([...list, input]);
      setShow(true);
      setInput("");
    } else {
      alert("nije dobro ukucan input");
    }
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
        {show && <Container list={list} />}
      </section>
    </>
  );
}

export default App;
