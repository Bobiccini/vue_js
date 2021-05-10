<template>
<div id="app">
    <H2> Liste Des Joueurs </h2>
    <ListeDesJoueurs></ListeDesJoueurs>
  </div>
</template>

<script>
import ListeDesJoueurs from './liste_des_joueurs'
export default {
    components:{ListeDesJoueurs},
    name:'gestion',
    data () { 
       return {
           msg: 'welcome'
        }
    }
}
</script>