import state from "./state";

export default {
    token: (state) => state.token,
    users: (state) => state.users,
    userID:(state)=> state.userID,
    userName:(state)=> state.userName,
    tests: (state) => state.tests
}