<template>
  <div id= "ListeDesJoueurs">
    <li v-for="joueur in playerList" :key="joueur.id_joueur"> 
      {{joueur.nom}} {{joueur.prenom}}
    </li >
  </div>
</template>

<script>
import axios from 'axios'
export default {  
    name: 'ListeDesJoueurs',
    data () { 
      return { 
          playerList:[],
          uri:" http://localhost:5000/api/liste_des_joueurs"
      }
    },

    mounted () {
      axios
        .get(this.uri)
        .then((response) => {
          this.playerList = response.data;
          console.log(this.playerList);
        }) 
        .catch((error) => {
          console.log(error);
        });
    },
}    
</script>