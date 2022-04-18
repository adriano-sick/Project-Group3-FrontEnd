export default {
    SET_TOKEN(state, token) {
        state.token = token;
    },
    SET_STUDENTS(state, users) {
        state.users = users;
    },
    SET_USERID(state, userID) {
        state.userID = userID;
    },
    SET_TESTS(state, tests) {
        state.tests = tests;
    },
}