import getters from '@/store/users/getters.js'
import mutations from '@/store/users/mutations.js'
import actions from '@/store/users/actions.js'

const state = () => ({
    users: []
})

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
