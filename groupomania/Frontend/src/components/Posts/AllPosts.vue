
<template>
   <ul >
        <li >
            <b-card tag="article" class="shadow" v-for="message in publications" :key="message.id" >

                <template #header>
                    <div class="headerPost">
                        <b-avatar id='CardUserImage'></b-avatar>
                        <h2>{{message.username}}</h2>
                        <em>{{message.createdAt}}</em>

                    </div>
                </template>

                <b-card id="CardImagePosted" >
                    <img :src="'http://localhost:3000/images/' + message.imageUrl" alt="image">
                </b-card>

                <b-card-text>
                    <p>{{message.title}}</p>
                </b-card-text>

                <b-card-text>
                    <p>{{message.content}}</p>
                </b-card-text>

                <hr>
                <template #footer >
                    <div class="d-flex justify-content-around">
                    <b-icon icon="heart" style="color: red" class="mr-1"></b-icon>
                    <b-icon icon="card-text" style="color: rgb(97, 135, 170)" class="mr-1"></b-icon>
                    </div>
                </template>

            </b-card>
        </li>
    </ul>
</template>



<script>
import axios from "axios";


export default {
    name: "Wall",

    data() {
        return {
            publications: [],
            props: {
                default: true
            },
        }
    },
    created () {
    axios
      .get('http://localhost:3000/api/publications',
      { headers: { Authorization: "Bearer " + localStorage.token }})
      .then(response => { this.publications = response.data})
      .catch(error => {console.log(error)})
    },

};
</script>

<style >

</style>