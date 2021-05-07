<template>
  <div id="app">
   <H1> Todolist </H1>
   <Todolist> </Todolist>
  </div>
</template>

<script>
import Todolist from './ToDoList.vue'
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

/*li {
  display: inline-block;
  margin: 0 10px;
}*/

a {
  color: #42b983;
}
</style>
