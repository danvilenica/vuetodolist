<template>
  <div>
      <input @change="todoTextChange" v-bind:value="todoText" type="text">
      <button type="submit" @click="addTodoI">Add todo</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data() {
        return{
            todoText:""
        }
    },
    methods:{
        ...mapActions(["addTodo"]),
        todoTextChange(e){
            this.todoText=e.target.value;
        },
        addTodoI(){
            this.addTodo({
                id: Math.random(),
                text: this.todoText,
                completed: false
            });
            this.todoText="";
        }
    }
}
</script>

<style>

</style>