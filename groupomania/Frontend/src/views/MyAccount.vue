<template>

    <main>

        <section>
            <b-card tag="article" style="max-width: 35rem;" class="mb-2 shadow mx-auto">

                <b-card 
                    id="CardImagePosted" 
                    style="border: none">
                    <b-avatar 
                        style="background-color: rgb(97, 135, 170)"
                        size="7.5rem" 
                        class="shadow" >
                    </b-avatar>
                </b-card>

                <div >
                    
                    <h1>{{ user.username }}</h1>

                    <b-button 
                        @click= "updateAccount" 
                        style="background-color: rgb(97, 135, 170)"
                    >  
                    <b-icon icon="pencil-fill"></b-icon> 
                    Modifier mon profil
                    </b-button>

                    <div class="Userinformation mt-5"> 

                        <p> Email: {{ user.email }}</p>

                        <p> Service: {{ user.service }}</p>

                        <p> Supprimer mon profil (apparait une fois le bouton modifier mon profil actionné)</p> 
                    </div>

                </div>

            </b-card>  

        </section>

        <!-- Si l'utilisateur a les autorisations administrateur, afficher ce qui suit -->
        <section v-if="userPermission === 'admin'">
            Tableaux de la database
        </section>

        <section> 
            <b-card tag="article" style="max-width: 35rem;" class="mb-2 shadow mx-auto">  
            return publication.userid
            </b-card>
        </section>
    </main> 

</template>

<script>
import axios from 'axios'

export default {
    name: "MyAccount",
    data() {
        return { 
            user: "",
        };
    },
    mounted() {
        axios.get("http://localhost:3000/api/auth")
        .then(response => {
          (this.user = response.data.user)
        })
        .catch(error => console.log(error)) 

    }
}
</script>

<style >

</style>