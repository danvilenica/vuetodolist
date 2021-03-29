<template>
  <div>
      <h1>To do list</h1>
      <div v-for="todo in allTodos" :key="todo.id">
        <TodoItem :todo="todo"/>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "./TodoItem.vue";

export default {
    components: {
        TodoItem
    },
    computed:{
        ...mapGetters(["allTodos"])
    }
}
</script>

<style>

</style>