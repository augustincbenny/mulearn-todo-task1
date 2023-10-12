import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import { TodoInterface } from "./utils/interface";

const App : React.FC= () => {
  const loadState= ()=> {
    const stateJson = localStorage.getItem("todolist");
    return stateJson ? JSON.parse(stateJson) : [];
  }

  // const [todos, setTodos] = useState<TodoInterface[]>([]);

  const [todos, setTodos] = useState<TodoInterface[]>(loadState());
  const [filter, setFilter] = useState<string>("all");
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

  // saving to local storage when todos array change
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todos));
  }, [todos]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleShowAll = () => {
    setFilter("all");
  };

  const handleShowActive = () => {
    const activeTodos = todos.filter((todo) => !todo.completed);
    //  if all tasks completed
    if (activeTodos.length <= 0) {
      setFilter("all");
    } else {
      setFilter("active");
    }
  };

  const handleShowCompleted = () => {
    const completedTodos = todos.filter((todo) => todo.completed);
    if (completedTodos.length <= 0) {
      setFilter("all");
    }
    if (completedTodos.length > 0) {
      setFilter("completed");
    } else {
      setFilter("all");
    }
  };

  // create radio
  const handleAddTodo = (newTodo:string) => {
    setTodos([{ id: Date.now(), newTodo, completed: false }, ...todos]);
    setFilter("all");
  };

  // clear completed 
  const handleClearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
    if (todos.length > 0) {
      setFilter("all");
    }
  };

  // cross x
  const handleRemoveTodo = (id:TodoInterface["id"]) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
    
  //  each task completed radio
  const handleCompleteTodo = (id:TodoInterface["id"]) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    }
    return true;
  });

  return (
    <div className={isDarkTheme ? "app" : "app light"}>
      <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />

      <main className="main">
        <Input isDarkTheme={isDarkTheme} onAddTodo={handleAddTodo} />

        <TodoList
          isDarkTheme={isDarkTheme}
          todos={filteredTodos}
          onCompleteTodo={handleCompleteTodo}
          onRemoveTodo={handleRemoveTodo}
        />
        <Filter
          isDarkTheme={isDarkTheme}
          todos={todos}
          clearCompleted={handleClearCompleted}
          showActive={handleShowActive}
          showAll={handleShowAll}
          showCompleted={handleShowCompleted}
        />
      </main>
    </div>
  );
}

export default App;
