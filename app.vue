<template>
  <div id= "app"> <H1> todolist </H1>
  </div>
</template>

<script>
import todolist from './ToDoList'
export default {
    name:'app',
    components: {Todolist},
    data () { 
       return {
           msg: 'welcome'
        }
    }
}
</script>