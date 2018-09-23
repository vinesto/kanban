import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/firebase.js'
import swal from 'sweetalert'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allTasks: '',
    backlogTasks: '',
    todoTasks: '',
    onprogressTasks: '',
    doneTasks: ''
  },
  mutations: {
    ALL_TASKS(state, payload) {
      state.allTasks = payload
    },
    BACKLOG_TASKS(state, payload) {
      state.backlogTasks = payload
    },
    TODO_TASKS(state, payload) {
      state.todoTasks = payload
    },
    ONPROGRESS_TASKS(state, payload) {
      state.onprogressTasks = payload
    },
    DONE_TASKS(state, payload) {
      state.doneTasks = payload
    }
  },
  actions: {
    addTask(context, payload) {
      db.ref('task/').push(payload)
      alert('add task success')
    },
    getAllTasks({ commit }, payload) {
      db.ref('task/').on('value', function (snapshot) {
        let allTasks = snapshot.val()
        let backlogTasks = []
        let onprogressTasks = []
        let todoTasks = []
        let doneTasks = []
        for (let index in allTasks) {
          let task = allTasks[index]
          task.id = index
          if (task.status === 0) {
            backlogTasks.push(task)
          } else if (task.status === 1) {
            todoTasks.push(task)
          } else if (task.status === 2) {
            onprogressTasks.push(task)
          } else if (task.status === 3) {
            doneTasks.push(task)
          }
        }
        commit('ALL_TASKS', allTasks)
        commit('BACKLOG_TASKS', backlogTasks)
        commit('TODO_TASKS', todoTasks)
        commit('ONPROGRESS_TASKS', onprogressTasks)
        commit('DONE_TASKS', doneTasks)
      })
    },
    deleteTask({ commit }, payload) {
      swal({
        text: 'Are you sure want to delete this task?',
        buttons: [true, 'Delete'],
        dangerMode: true
      })
        .then((confirm) => {
          if (confirm) {
            db.ref(`task/${payload}`).remove()
          }
        })
    },
    updateStatus({ commit }, payload) {
      swal({
        text: 'Are you sure you want to update the task ?',
        buttons: [true, 'Update']
      })
        .then((confirm) => {
          if (confirm) {
            if (payload.toRight) {
              payload.task.status++
            } else {
              payload.task.status--
            }
            db.ref(`task/${payload.task.id}`).set(payload.task)
          }
        })
    }
  }
})
