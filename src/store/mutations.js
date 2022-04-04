export default {
    SET_TOKEN(state, tokenKey) {
        state.token = tokenKey;
    },
    SET_STUDENTS(state, students) {
        state.students = students;
    },
    SET_INITIAL_STORE_STATE(state, { token }) {
         state.token = token;
    },


}