<template>
  <div>
    <main>
      <h1>Users Pages</h1>
      <div class="create-user">
        <label for="fname"><h3>FirstName:</h3> </label>
        <input
          id="fname"
          v-model="firstName"
          type="text"
          placeholder="Add New User"
          @keypress.enter="addUser"
        />

        <button @click="addUser">ADD</button>
      </div>
      {{ $store.state.users.users }}
      <UserComponent />
    </main>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
import('@/assets/css/main.css')

export default {
  layout: 'custom',
  component: {},
  data() {
    return {
      user: {},
      users: [],
      firstName: '',
      lastName: 'Tassaro',
    }
  },
  computed: {},
  methods: {
    // ...mapActions(
    //   'users', ['toggleAddUsers']
    // )
    addUser() {
      this.user = `{firstName: ${this.firstName}, lastName: ${this.lastName}}`
      console.log(this.user)
      this.$store.dispatch('users/toggleAddUsers', this.user)
      console.log("commit to users mutation")
    }
  },
}
</script>

<style>
* {
  text-align: center;
}
</style>
