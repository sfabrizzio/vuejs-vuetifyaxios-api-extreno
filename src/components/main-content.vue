<template>

<v-layout row wrap align-center>
    <v-flex XS9 offset-md2>
   <div v-for="article in articles" :key="article.title">
  <v-card class="my-3" hover>
<v-img height="350px"  max-width="920" v-bind:src="article.urlToImage">

</v-img>
<v-container fill-height fluid>
  <v-layout>
    <v-flex xs-12 align-self-end d-flex>
<span class="headLine">
{{article.title}}

</span>
</v-flex>
</v-layout>
<v-card-text>
  {{article.description}}
</v-card-text>
<v-card-actions>
  <v-chip small color="secondary" class="white--text">

{{article.source.name}}

     </v-chip>
     </v-card-actions>


      <v-space></v-space>
  <v-btn icon class="red--text">
    <v-icon small>mdi-reddit</v-icon>
    </v-btn>
     <v-btn icon class="red--text">
    <v-icon small>mdi-reddit</v-icon>
    </v-btn>
     <v-btn icon class="red--text">
    <v-icon small>mdi-reddit</v-icon>
    </v-btn>  
 
 
   

 <v-space></v-space>
<v-btn small replace color ="info" v-bind:href="article.url"
    target="_blank">Read More</v-btn>
  
</v-container>
 
  </v-card>
   </div>
    </v-flex>
</v-layout>
</template>
<script>


export default ({
   name:"main-content",
   props : {
       articles :Array
   }
})
</script>
