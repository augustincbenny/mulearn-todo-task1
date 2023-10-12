import React from 'react'
import { TodoInterface } from "../utils/interface";
import Todo from "./Todo";

type Props = {
  isDarkTheme:boolean, 
  todos:TodoInterface[], 
  onRemoveTodo:(id:TodoInterface["id"]) => void,
  onCompleteTodo:(id:TodoInterface["id"]) => void
}

const TodoList:React.FC<Props> = ({ isDarkTheme, todos, onRemoveTodo, onCompleteTodo }) => {
  return (
    <ul className = {isDarkTheme ? "list" : "list light"}>
      {todos.length ? (
        todos.map((todo:TodoInterface) => {
          return (
            <Todo
              isDarkTheme={isDarkTheme}
              todo={todo}
              key={todo.id}
              onRemoveTodo={onRemoveTodo}
              onCompleteTodo={onCompleteTodo}
            />
          );
        })
      ) : (
        <li className={isDarkTheme ? "empty-todo" : "empty-todo light"}>
          Start Adding Tasks
        </li>
      )}
    </ul>
  );
}

export default TodoList;
