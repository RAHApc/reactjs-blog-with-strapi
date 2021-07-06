export const postReducer = (state = [], action) => {
    switch (action.type) {
        case "INIT":
            return [...action.payload];
        case "ADD_POST":
            return [...action.payload];
        case "DELETE_POST":
            return [...action.payload];
        default:
            return state;
    }
}