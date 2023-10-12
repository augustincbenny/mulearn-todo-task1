import React, { useState } from "react";

type Props = {
  isDarkTheme:boolean, 
  onAddTodo:(newTodo:string) => void
}

const Input : React.FC<Props> = ({ isDarkTheme, onAddTodo })=> {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      onAddTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <form className="form" onSubmit={handleAddTodo}>
      <input
        className={isDarkTheme ? "input" : "input light"}
        type="text"
        placeholder="Create a new todo..."
        onChange={handleInputChange}
        value={newTodo}
      />
      <button
        type="submit"
        // onClick={handleAddTodo}
        className={isDarkTheme ? "circle" : "circle light"}
      ></button>
    </form>
  );
}

export default Input;
