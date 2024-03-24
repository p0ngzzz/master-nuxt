<template>
  <div id="todo">
    <main>
      <h1>Task Board</h1>
      <p>Create a list of tasks</p>

      <div class="create-new">
        <input
          v-model="newTask"
          type="text"
          placeholder="Add new Task"
          @keypress.enter="addTask"
        />
        <button @click="addTask">ADD</button>
        <!-- <button @click="removeTask">REMOVE</button> -->
      </div>
      <div class="tasks">
        <!-- Component task here -->

        <TaskComponent
          v-for="(task, index) in $store.state.tasks"
          :key="index"
          :task="task"
        />
      </div>
      <div class="checkTask">
        {{ $store.state.tasks }}
      </div>
    </main>
  </div>
</template>

<script>
import('@/assets/css/main.css')
export default {
  name: 'TodoPages',
  layout: 'custom',
  data() {
    return {
      newTask: '',
    }
  },
  mounted() {},
  methods: {
    async addTask() {
      if (this.newTask) {
        await this.$store.commit('ADD_TASK', this.newTask)
        this.newTask = ''
        console.log(this.$store.getters.getTasks)
      }
    },
    async removeTask() {
      await this.$store.commit('REMOVE_TASK', this.newTask)
      this.newTask = ''
      console.log(this.$store.getters.getTasks)
    },
  },
}
</script>

<style></style>
