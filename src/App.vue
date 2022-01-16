<template>
<v-app>
<v-app-bar app color="primary" dark>
  <v-app-bar-nav-icon @click="drawer=!drawer"
                      class="white--text">
  </v-app-bar-nav-icon>
     <v-toolbar-title>Noticias ultimo - 
       2022</v-toolbar-title>
</v-app-bar>
<v-main>
  <v-content>
    <v-container fluid>
    <!--   llama al componente main-contetn -->
<main-content :articles ="articles">

</main-content>
    </v-container>
  </v-content>
  <!-- <v-footer class="secondary" app>
    Made with <v-icon class="red--text">mdi-heart</v-icon>
    using <a class="white--text"></a>
  </v-footer> -->
</v-main>
</v-app>
  
</template>

<script>
/* import axios from "axios"; */
import EventService from './services/TutorialService'
import MainContent from './components/main-content.vue';
export default {
  name: 'App',

  components: {
    MainContent
   
  },

   data:()=>({
drawer:false,
apiKey:'',
articles : [],
errors : [],
   }),

   methods: {
 /* Service */

  retrieveTutorials() {
    EventService.getAll()
.then((response)=>{
  this.articles=response.data.articles; 
     /* console.log(this.frameworks2).map(this.getDisplayTutorial) ; */
}) 
.catch( e=>{
   console.log(e)
    });
},


   },
   created(){
       this.retrieveTutorials();
   }
/*Sin Service */
   /*   created(){
axios.get( 'https://newsapi.org/v2/top-headlines?country=us&apiKey=075640c99ce94ef3aafdb7f1a3b09f4f')
.then(response => { */
/* response.data.articles es proque dentro del json va contener articles;*/ 
 /* objeto coleccion articles*/
 /* this.articles=response.data.articles;
 console.log('data:');
 console.log(response.data.articles)
})
 */

     /* } */
    };
 </script>
