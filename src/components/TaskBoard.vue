<template>
    <div class="card board">
    <div class="card-header" :class="setColor('bg-')">
      <h6 class="text-white">{{status}}</h6>
    </div>
    <div class="card-body">
      <task-card v-for="(task, index) in tasks" :key="index" :task="task"></task-card>
    </div>
  </div>
</template>

<script>
import TaskCard from "@/components/TaskCard.vue";

export default {
  name: "TaskBoard",
  props: ["tasks", "status"],
  components: {
    TaskCard
  },
  methods: {
    setColor(input) {
      if (this.status === "Backlog") {
        return input + "danger";
      } else if (this.status === "To Do") {
        return input + "warning";
      } else if (this.status === "On Progress") {
        return input + "primary";
      } else {
          return input + 'success'
      }
    }
  }
};
</script>

<style>
</style>
