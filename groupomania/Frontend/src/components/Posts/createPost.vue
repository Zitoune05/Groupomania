<template>

  <b-card tag="article" style="max-width: 35rem; max-height: 35em;" class="container mt-2 shadow ">

    <b-form method="POST" @submit.prevent = "createPost">

      <section class="mt-3">
          <b-form-input  
            type="text"
            id="feedback-title" 
            style="max-width: 300px; margin: auto;"
            v-model="publication.title"
            placeholder="Titre" 
          >
          </b-form-input>
      </section>
      
      <section>
          <textarea 
            class="form-control" 
            id="text-password" 
            rows="6" 
            placeholder="Écrivez votre premier message !"
            v-model="publication.content"> 
          </textarea>
      </section>

      <div>
        <input type="file" class="form-control-file" @change="uploadImage" accept="image/png, image/jpeg, image/gif">
      </div>

      <hr>  
      <b-button type="submit" variant="outline-primary">Partager</b-button>

    </b-form>

  </b-card>

</template>

<script>
import axios from "axios";

export default {
  name: "createPost",
  data() {
    return {
      publication:{
        title: "",
        content: "",
        imageUrl: ""
      }
    }
  },
  methods: {
    createPost: function() {

      if( !this.publication.content ) {
        alert('Champ requis !')
      }

      const newPost = new FormData();
      
      newPost.append("title", this.publication.title);
      newPost.append("content", this.publication.content);
      newPost.append("inputFile", this.publication.imageUrl);
      

      axios.post("http://localhost:3000/api/new",  
        this.publication,  
        { headers: { Authorization: "Bearer " + localStorage.token }}
      )
      .then(() => { this.publication === "";
        console.log("Publication envoyée avec succée !")})
      .catch((erreur) => {
        console.log("erreur" + erreur);
      })
    },
    uploadImage: function (upluoad) {
      const files = upluoad.target.files;
      if ( !files.lenght) return;
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (upluoad) => { this.publication.imageUrl = upluoad.target.result;}
    },
  }
}
</script>

<style>

</style>
