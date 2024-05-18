import React, { useState } from "react";

const TodoList = () => {
  const [title, setTitle] = useState("React js");
  const [todo, setTodo] = useState("");

  return (
    <div>
      <input
        type="text"
        name="todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => setTodo(title)}>add</button>
      <p>{todo}</p>
      <button onClick={() => setTodo("")}>delete</button>
    </div>
  );
};

export default TodoList;
