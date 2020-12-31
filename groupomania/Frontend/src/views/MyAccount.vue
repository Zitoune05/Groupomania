<template>

    <div>
        <section>
            <b-card tag="article" class="mb-2 shadow mx-auto" style="max-width: 35rem;">

                <b-card id="CardImagePosted" style="border: none">
                    <b-avatar size="7.5rem" class="shadow blue" ></b-avatar>
                </b-card>

                <div>   <!-- information sur le compte de l'utilisateur -->
                    
                    <h1>{{ user.username }}</h1>

                    <!-- Bouton modification  -->
                    <b-button id="update" class="blue">  
                        <b-icon icon="pencil-fill" class="mr-1"></b-icon> 
                            <router-link to="/users/update" style="color: white;">
                                Modifier mon profil
                            </router-link>
                    </b-button>

                    <div class="Userinformation mt-5"> 

                        <div >
                            <p> email: {{ user.email }}</p>

                            <p> username: {{ user.username }}</p>

                        </div>
                    
                        <!-- Bouton Suppression  -->
                        <b-button @click="deleteUser(user)" variant="outline-danger">
                            <b-icon icon="trash" class="mr-1"></b-icon> Supprimer
                        </b-button>

                    </div>

                </div>

            </b-card>  

        </section>

        <!-- Liste des publication de l'utilisateur -->

        <section> 
            <b-card tag="article" style="max-width: 35rem;" class="mb-2 shadow mx-auto">  
            return publication
            </b-card>
        </section>

    </div> 

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
        axios
            .get("http://localhost:3000/api/me", {
                headers: { Authorization: "Bearer " + localStorage.token },
            })
            .then((response) => (this.user = response.data.user))
            .catch((err) => console.log(err));
    },
    methods:{

        deleteUser: function(user) {
            axios.delete("http://localhost:3000/api/auth/users/" + user.id, 
                { headers: { Authorization: "Bearer " + localStorage.token }})
            .then((response) => console.log(response))
            .catch((err) => console.log(err))
        localStorage.clear();
        this.$router.push("/login");
        }
    }

}
</script>

<style >
.blue{
    background-color: rgb(97, 135, 170);
}
</style>