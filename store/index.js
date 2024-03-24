// store todo list

// todo state
export const state = () => ({
    tasks: []
})

// todo getters
export const getters = {
    getTasks(state) {
        return state.tasks
    }
}

// todo mutations
export const mutations = {
    ADD_TASK(state, task) {
        state.tasks = [{content: task, done: false}, ...state.tasks]
        // above line be like
        // state.tasks.push({content: task, done: false})
    },
    REMOVE_TASK (state, task) {
        console.log(state.tasks.indexOf(task))
        state.tasks.splice(state.tasks.indexOf(task), 1)
    },
    TOGGLE_TASK (state, task) {
        console.log("before toggle: ", task.done)
        task.done = !task.done;
        console.log("after toggle: ", task.done)

    }
}