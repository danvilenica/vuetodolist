import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        text: "Odradi trening",
        completed: false,
      },
    ],
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    TOGGLE_TODO(state, id){
      const foundIndex = state.todos.findIndex((x) => x.id == id);
      state.todos[foundIndex].completed = !state.todos[foundIndex].completed;
    },
  },
  actions: {
    addTodo({ commit }, todo) {
      commit("ADD_TODO", todo);
    },
    toggleTodo({ commit }, id) {
      commit("TOGGLE_TODO", id);
    },
  },
  modules: {
  },
});
