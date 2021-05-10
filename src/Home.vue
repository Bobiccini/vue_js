<template>
<div id="app">
    <H2> Liste des Liste Des Matchs </h2>
    <ListeDesMatchs></ListeDesMatchs>
  </div>
</template>

<script>
import ListeDesMatchs from './liste_des_matchs'
export default {
    components:{ListeDesMatchs},
    name:'home',
    data () { 
       return {
           msg: 'welcome'
        }
    }
}
</script>