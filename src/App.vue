<template>
  <div id="app">
       <div class="header">
      <h1>Kibubu Rugby Club VUE.JS</h1>
      <div class="menu">
        <div> <router-link :to = "{name:'Matchs'}" > Liste des Matchs </router-link> </div>
        <div> <router-link :to = "{name:'Gestion'}" > Gestion d'Equipe </router-link> </div>
      </div>
  </div>
<router-view> </router-view> 
  <div class="footer">
  <div class="rs">
    <div class="insta">
      <a href="https://www.instagram.com/kibubu_rugby/">
        <div class="logo">
           <img src="./insta.jpg" alt="Lien Instagram" /> 
         </div>	
      </a>
    </div>
    <div class="face"> 
      <a href="https://www.facebook.com/KibubuRugbyClub">
        <div class="logo">
           <img src="./face.jpg" alt="Lien Facebook" /> 
         </div> 
      </a>
    </div>
  </div>
  </div>	
  </div>
  
</template>

<style>

  .header {   
    background-color:orangered;
    color: orange;
    height: 19vh;
    overflow: hidden;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
    h1 {
        color:orange;
        text-align: center;
        font-size: 6vh;
        text-shadow:2px 2px 5px black;
    }

body {
    background-color: lightyellow;
    color:orange;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

h2 {
    color:orangered;
    text-align: left;
    font-size: 4vh;
    padding-left: 5vw;
}

.menu {
    display: flex;
    background-color: orange;
    align-content: space-around;
    justify-content: space-evenly;
	box-shadow: 0px 0px 10px lightyellow;
	font-size: 3vh;	
	text-align: center;
	}

    .menu a {
        color:lightyellow;
        text-decoration: none;
    }
    .menu :hover{
        color: black;
        }

    #ListeDesMatchs li{
        color : black;
        background-color: gainsboro;
        border-color: orangered;
        border-style: groove;
        text-align: center;
        justify-content: center;
        align-items: center;
        margin: 1vw;
        padding-top: 1vh;
        max-height: 10vh;

    }
    #ListeDesJoueurs li{
        color : black;
        background-color: gainsboro;
        border-color: orangered;
        border-style: groove;
        text-align: center;
        justify-content: center;
        align-items: center;
        margin: 1vw;
        padding-top: 1vh;
        max-height: 10vh;

    }

.footer {
    background-color:orangered;
    color: orange;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    height: 12vh;
    left: 0;
    bottom: 0;
    width: 100%;
    }
    
    .rs {
	padding-top: 1vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
	align-content: center;
	width: 20%;
	padding-left:40vw;
	}

	.rs img {
		height: 10vh;
		border-radius: 25px;
		}

	.rs img:hover {
		height: 10vh;
		border-radius: 25px; 
		box-shadow: 0px 0px 15px black;
		}	
</style>
