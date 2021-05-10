import Vue from 'vue'
import VueRouter from 'vue-router'
import ListeDesMatchs from './liste_des_matchs'
import Gestion from './Gestion'

Vue.use(VueRouter)

const routes = 
[
    {path: "/", component: ListeDesMatchs, name : "Matchs"},
    {path: '/gestion', component: Gestion, name : "Gestion"}
]

export default new VueRouter( {routes} )