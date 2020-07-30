import React from "react";
import "../styles.css";

function TodoItem() {
  return (
    <div className="todo-wrapper">
      <input type="checkbox" className="todo-checkbox" />
      <span className="todo-item">To do Item</span>
    </div>
  );
}

export default TodoItem;
