import React from 'react'
import crossIcon from "../images/icon-cross.svg";
import { TodoInterface } from '../utils/interface';

type Props ={
  isDarkTheme:boolean,
  todo:TodoInterface, 
  onRemoveTodo:(id:TodoInterface["id"]) => void,
  onCompleteTodo:(id:TodoInterface["id"]) => void
}
const Todo:React.FC<Props> = ({ isDarkTheme, todo, onRemoveTodo, onCompleteTodo }) => {

  const handleCompleteClick = () => {
    onCompleteTodo(todo.id);
  };

  const handleRemoveClick = () => {
    onRemoveTodo(todo.id);
  };

  return (
    <li className={isDarkTheme ? "todo" : "todo light"}>
      <input
        id="checkbox"
        className={isDarkTheme ? "checkbox" : "checkbox light"}
        type="checkbox"
        title="Mark/Unmark completed"
        checked={todo.completed}
        onChange={handleCompleteClick}
      />

      <label
        onClick={handleCompleteClick}
        style={todo.completed ? { textDecoration: "line-through" } : {}}
        className={isDarkTheme ? "todo-item" : "todo-item light"}
      >
        {todo.newTodo}
      </label>

      <button className="remove-btn">
        <img
          src={crossIcon}
          alt="remove icon"
          title="Remove"
          onClick={handleRemoveClick}
        />
      </button>
    </li>
  );
}

export default Todo;
