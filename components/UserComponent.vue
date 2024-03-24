<template>
  <div id="user">
    <h2>use old version already</h2>
    <!-- <div class="user-table">
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
