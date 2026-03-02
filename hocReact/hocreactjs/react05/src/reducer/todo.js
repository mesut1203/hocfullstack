import TodoList from "../component/TodoList";

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO": {
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
            };
        }
        case "REMOVE_TODO": {
            return {
                ...state,
                todoList: state.todoList.filter((_, i) => i !== action.payload),
            };
        }

        case "TOGGLE_TODO": {
            return {
                ...state,
                todoList: state.todoList.map((todo, i) =>
                    i === action.payload
                        ? { ...todo, complete: !todo.complete }
                        : todo
                ),
            };
        }
    }
};

export const initialState = {
    todoList: [],
};
