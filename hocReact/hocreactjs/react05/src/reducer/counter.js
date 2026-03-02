// Chứa reducer

export const counterReducer = (state, action) => {
    // console.log(prevValue, newValue);
    // return "Aa";

    // return prevValue + newValue;

    // action : mô tả hành động
    //{type: tên-hanh-dong, payload: giatri}
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1,
            };
        case "PUSH_MESSAGE":
            return {
                ...state,
                message: action.payload,
            };

        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1,
            };
        // default:
        //     return state;
    }
};

export const initialState = {
    count: 0,
    message: "",
};
