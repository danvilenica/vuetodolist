<template>
  <div id="app">
    <TodoInput/>
    <TodoList/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

@Component({
  components: {
    TodoInput,
    TodoList,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
