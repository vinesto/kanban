<template>
    <div class="taskModal">
    <div class="modal fade" id="addTaskModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add New Task</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form onSubmit = "return false">
              <div class="form-group">
                <label for="title">Title</label>
                <input v-model="taskTitle" type="text" class="form-control" id="title" placeholder="title" required>
                </div>
              <div class="form-group">
                <label for="description">Description</label>
                <input v-model="taskDesc" type="text" class="form-control" id="description" placeholder="description" required>
              </div>
              <div class="form-group">
                <label for="assign">Assign to</label>
                <input v-model="taskAssign" type="text" class="form-control" id="assign" placeholder="assign" required>
              </div>
              <div class="form-group">
                <label for="points">Story point</label>
                <input v-model="taskPoint" type="number" class="form-control" id="points" placeholder="point" required>
              </div>
              <div class="form-group">
                <label for="select">Set Task Priority</label>
                  <select v-model="taskPriority" class="custom-select" id="select" required>
                    <option value="low">Low</option>
                    <option value="high">High</option>
                  </select>
              </div>
            </form>
                <div class="modal-footer">
                    <button @click="addToTask" type="submit" class="btn btn-danger" data-dismiss="modal">Submit</button>
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TaskModal",
  data() {
    return {
      taskTitle: "",
      taskDesc: "",
      taskAssign: "",
      taskPoint: 0,
      taskPriority: "low"
    };
  },
  methods: {
    addToTask() {
      let payload = {
        title: this.taskTitle,
        desc: this.taskDesc,
        assign: this.taskAssign,
        point: this.taskPoint,
        priority: this.taskPriority,
        status: 0
      };
      this.$emit("add-task", payload);
    }
  }
};
</script>

<style>
</style>
