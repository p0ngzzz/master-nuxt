export default {
    ADD_USER (state, info) {
        state.users = [info, ...state.users]

    },
    EDIT_USER (state, info) {
        // statement edit user here
    }
}