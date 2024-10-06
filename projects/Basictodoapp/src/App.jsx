import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [array, setarray] = useState([]);

  const addTodo = () => {
    let newArray = [...array];
    newArray.push(input);
    setarray(newArray);
    console.log(newArray);

    setInput("");
  };
  const handleDeleteTodo = (index) => {
    let newArray = [...array];
    newArray.splice(index, 1);
    setarray(newArray);
  };
  const handleEdittodo = (index) => {
    let promptValue = prompt("Edit todo");
    let newArray = [...array];
    newArray[index] = promptValue;
    setarray(newArray);
  };

  return (
    <>
      <input
        type="text"
        placeholder="add your task"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={addTodo}>add task</button>

      <ul>
        {array.map((value, index) => {
          return (
            <li>
              {value}
              <button onClick={() => handleDeleteTodo(index)}>Delete</button>

              <button onClick={() => handleEdittodo(index)}> Edit</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
