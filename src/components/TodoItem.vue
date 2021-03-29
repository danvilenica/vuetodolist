<template>
  <div v-bind:class="{completed:todo.completed}" @click="toggleTodo(todo.id)">{{todo.text}}</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    props:{
        todo:{}
    },
    methods:{
        ...mapActions(["toggleTodo"]),
        
    }
}
</script>

<style>
    .completed{
        text-decoration: line-through;
    }
</style>