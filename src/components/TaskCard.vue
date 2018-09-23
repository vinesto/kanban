<template>
    <div class="card task">
    <div class="card-header  d-flex justify-content-between">
      <strong>{{task.title}}</strong>
      <i v-if='task.priority == "high"' class="highprior fas fa-exclamation-circle"></i>
      <i v-else class="lowprior fas fa-flag"></i>
    </div>
    <div class="card-body">
      <p class="card-text desc">Description: {{ task.desc}}</p>
      <p class="card-text">Assigned to: {{task.assign}}</p>
      <p class="card-text">Story point: {{task.point}}</p>
      <p class="card-text">Priority: {{task.priority}}</p>
    </div>
    <div class="card-footer d-flex justify-content-between">
      <button @click="deleteTask(task.id)" type="submit" class="btn btn-outline-danger btn-sm">
        <i class="fas fa-trash"></i>
      </button>
      <div class="btn-group" role="group">
        <button @click="moveLeft" v-if="task.status > 0" type="button" class="btn btn-outline-warning btn-sm">
          <i class="fas fa-arrow-circle-left"></i>
        </button>
        <button @click="moveRight" v-if="task.status < 3" type="button" class="btn btn-outline-success btn-sm">
          <i class="fas fa-arrow-circle-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Card",
  props: ["task"],
  methods: {
    ...mapActions(["updateStatus", "deleteTask"]),
    moveRight() {
      this.updateStatus({
        task: this.task,
        toRight: true
      });
    },
    moveLeft() {
      this.updateStatus({
        task: this.task,
        toRight: false
      });
    }
  }
};
</script>

<style>
</style>
