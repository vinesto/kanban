<template>
  <div class="home">
    <nav-bar/>
    <task-modal v-on:add-task="addToTask"/>
    <div class="container">
      <div class="row">
        <div class="col-lg-3 p-1">
          <task-board :tasks="backlogTasks" :status="'Backlog'"/>
        </div>
        <div class="col-lg-3 p-1">
          <task-board :tasks="todoTasks" :status="'To Do'"/>
        </div>
        <div class="col-lg-3 p-1">
          <task-board :tasks="onprogressTasks" :status="'On Progress'"/>
        </div>
        <div class="col-lg-3 p-1">
          <task-board :tasks="doneTasks" :status="'Done'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";
import NavBar from "@/components/NavBar.vue";
import TaskModal from "@/components/TaskModal.vue";
import TaskBoard from "@/components/TaskBoard.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    NavBar,
    TaskModal,
    TaskBoard
  },
  computed: {
    ...mapState({
      allTasks: 'allTasks',
      backlogTasks: 'backlogTasks',
      todoTasks: 'todoTasks',
      onprogressTasks: 'onprogressTasks',
      doneTasks: 'doneTasks'
    })
  },
  methods: {
    ...mapActions(['addTask', 'getAllTasks']),
    addToTask(payload) {
      this.addTask(payload);
    }
  },
  created () {
    this.getAllTasks()
  }
};
</script>
