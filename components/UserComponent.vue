<template>
  <div id="user">
    <div class="user-table">
      <h1>I am Natthawadee Hnaknan</h1>
      <h1>I am 27 years old</h1>
      <h1>I am Pongsatorn Tassaro</h1>
      <table>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user_, index) in allUser" :key="index">
            <td>{{ user_.firstName }}</td>
            <td>{{ user_.lastName }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserComponent',
  data() {
    return {
      allUser: this.$store.state.users.users
    }
  },
  created() {
    console.log(this.allUser)
  },
  
  methods: {

  }
}
</script>

<style></style>
