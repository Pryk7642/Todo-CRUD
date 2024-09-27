import { todoProps } from "@/types";

import ChangeTodo from "./ChangeTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

const Todo = ({ todo }: { todo: todoProps }) => {
  const todoStyle = {
    textDecoration: todo.isComplete ? "line-through" : "none",
    opacity: todo.isComplete ? 0.5 : 1,
  };

  return (
    <div
      style={todoStyle}
      className="w-10/12 mx-auto flex flex-col items-center justify-between bg-slate-900 py-4 px-20 rounded-2xl"
    >
      <div className="w-full flex items-center justify-between">
        <ChangeTodo todo={todo} />
        <span className="text-center font-bold uppercase grow">{todo.title}</span>
        <EditTodo todo={todo} />
        <DeleteTodo todo={todo} />
      </div>
      <p className="text-center italic mt-2">{todo.description}</p> {/* Display Description */}
    </div>
  );
};

export default Todo;
