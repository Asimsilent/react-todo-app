import { useState } from "react";
import "./App.css";
import { Alert, Button, Form } from "react-bootstrap";

function App() {
  const [count, setCount] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [index, setIndex] = useState(null);
  function handleChange(e) {
    setCount(e.target.value);
  }
  const a = "";
  function handleClick() {
    setCount("");
    setList((prev) => [...prev, count]);
  }
  function handleDelete(index) {
    const newAry = list.filter((el, i) => i != index);
    setList(newAry);
  }
  function handleEdit(item, i) {
    setCount(item);
    setEdit(true);
    setIndex(i);
  }
  function handleUpdate() {
    let array = [...list]
    array.splice(index, 1, count);
    console.log(array);
    setList(array);
    handleCancel();
  }
  function handleCancel() {
    setEdit(false);
    setCount("");
  }
  return (
    <>
      <Form.Label>List Items</Form.Label>
      <div className=" d-flex align-items-center ">
        <Form.Control
          className=" me-2"
          type="text"
          name="todo-title"
          id="todo-title"
          onChange={handleChange}
          value={count}
        />
        {edit ? (
          <>
            <Button
              variant="primary"
              size="lg"
              onClick={handleUpdate}
              disabled={count == ""}
            >
              update
            </Button>
            <Button variant="primary" size="lg" onClick={handleCancel}>
              cancel
            </Button>
          </>
        ) : (
          <Button
            variant="primary"
            size="lg"
            onClick={handleClick}
            disabled={count == ""}
          >
            Add
          </Button>
        )}
      </div>
      <div>
        <ul>
          {list.length > 0 ? (
            list.map((title, i) => {
              return (
                <li key={i}>
                  <div className=" d-flex align-items-center justify-content-between">
                    <span>{title}</span>
                    <div className=" d-flex align-items-center justify-content-end">
                      <button
                        onClick={() => {
                          handleEdit(title, i);
                        }}
                      >
                        edit
                      </button>
                      <button
                        onClick={() => {
                          handleDelete(i);
                        }}
                      >
                        delete
                      </button>
                    </div>
                  </div>
                </li>
              );
            })
          ) : (
            <Alert variant="danger">No Record Found</Alert>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
