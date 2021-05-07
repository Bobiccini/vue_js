<template>
  <div id= "todolist"> <h2> To do liste H2 </h2>
  <ul>
    <div v-for="todo in todolist> 
      {{todo.name}}
      </div> 
  </ul>  
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Todolist',
    data () {
        return {
          todolist:[],
          url:" http://localhost:5000/api/liste_des_joueurs"
        }
    },
    methods: {
      get_todolist() {
        axios.get(this.url)
        .then((Response) => {
          this.todolist = response.data;
          console.log(this.todolist);
        }) 
        .catch((error) => {
          console.log(error);
        })
      }
    },
    mounted(){
      this.get_todolist();
    }
}
</script>