<template>
  <div class="mx-auto">

    <b-card tag="article" class="mb-2 shadow " v-for="publication in Publications" :key="publication.id">
      
      <template #header>
         <div class="headerPost">
            <b-avatar id='CardUserImage'></b-avatar>
            <h2>{{publication.username}}</h2>
            <!-- <em>{{ publication.createdAt.split(" ")[0] }}</em> -->
          </div>
      </template>

      <b-card id="CardImagePosted" >
        <img :src="'http://localhost:3000/images/' + publication.imageUrl" alt="image">
      </b-card>

      <b-card-text>
        <p>{{publication.content}}</p>
      </b-card-text>
      
      <hr>
      <template #footer >
        <div class="d-flex justify-content-around">
          <b-icon icon="heart" style="color: red" class="mr-1"></b-icon>
          <b-icon icon="card-text" style="color: rgb(97, 135, 170)" class="mr-1"></b-icon>
        </div>
      </template>

    </b-card>
  </div>
</template>

<script>
import axios from "axios";


export default {
  name: 'AppCard',
  data() {
        return {
            user: "",
            publication: {
                username: "",
                title: "",
                content: "",
                imageUrl: "",
                userId: "",
            },
            Publications: [],
            likes: 0,
            hasBeenLiked: false,

          
        };
    },
    mounted() {
        axios
        .get("http://localhost:3000/api/publications/one", { headers: { Authorization: "Bearer " + localStorage.token }})
        .then((response) => (this.publication = response))
        .catch((err) => console.log(err));
    },

  }
</script>

<style >
  .headerPost{
    display: flex;
    align-items: baseline;
  }
  #CardImagePosted{
    border: 0px ;
  }
</style>