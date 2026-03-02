import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { completedTodo, removeTodo } from "../../store/slice/todoSlice";

export default function TodoList() {
    const todoList = useSelector((state) => state.todo.TodoList);
    const dispatch = useDispatch();
    const handleRemove = (index) => {
        if (!confirm("chắc chắn xóa")) {
            return;
        }
        dispatch(removeTodo(index));
    };

    const handleCompleted = (index) => {
        dispatch(completedTodo(index));
    };
    return (
        <div>
            <ul>
                {todoList.map((todo, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            onChange={() => handleCompleted(index)}
                        />
                        <span
                            style={{
                                textDecoration: todo.completed
                                    ? "line-through"
                                    : "none",
                            }}
                        >
                            {todo.title}
                        </span>
                        <button onClick={() => handleRemove(index)}>
                            &times;
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
