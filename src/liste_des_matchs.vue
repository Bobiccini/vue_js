<template>
  <div id= "ListeDesMatchs">
    <li v-for="match in matchList" :key="match.id_match"> 
      {{match.date}} {{match.nom}}
    </li >
  </div>
</template>

<script>
import axios from 'axios'
export default {  
    name: 'ListeDesMatchs',
    data () { 
      return { 
          matchList:[],
          uri:"http://localhost:5000/api/"
      }
    },

    mounted () {
      axios
        .get(this.uri)
        .then((response) => {
          this.matchList = response.data;
          console.log(this.matchList);
        }) 
        .catch((error) => {
          console.log(error);
        });
    },
}    
</script>