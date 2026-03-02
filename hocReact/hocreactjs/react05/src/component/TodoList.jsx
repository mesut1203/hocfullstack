import { useContext, useReducer, useState } from "react";
import { initialState, todoReducer } from "../reducer/todo";
import "./TodoList.css";
import { AppContext } from "../App";
import Title from "./Title";

export default function TodoList() {
    const context = useContext(AppContext);
    console.log(context);

    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [title, setTitle] = useState("");

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (!title) {
            return;
        }
        dispatch({
            type: "ADD_TODO",
            payload: { title, complete: false },
        });
        setTitle("");
    };

    const handleRemoveTodo = (index) => {
        console.log(index);

        dispatch({
            type: "REMOVE_TODO",
            payload: index,
        });
    };

    const handleToggleTodo = (index) => {
        dispatch({
            type: "TOGGLE_TODO",
            payload: index,
        });
    };

    return (
        <div>
            <Title />
            <ul>
                {state.todoList.map(({ title, complete }, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={complete}
                            onChange={() => handleToggleTodo(index)}
                        />
                        <span className={complete ? "completed" : ""}>
                            {title}
                        </span>
                        <button
                            onClick={() => {
                                handleRemoveTodo(index);
                            }}
                        >
                            &times;
                        </button>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    placeholder="Title..."
                    onChange={handleChange}
                    value={title}
                />
                <button>Add</button>
            </form>
        </div>
    );
}
