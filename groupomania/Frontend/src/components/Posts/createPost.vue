<template>
   <b-card tag="article" style="max-width: 35rem;" class="container mt-2 shadow ">

    <form method="POST" @submit.prevent = "createPost">

      <section class="mt-3">
        <b-form  @submit.stop.prevent>
          <label for="feedback-user">Pseudo</label>
          <b-form-input  
            type="text"
            id="feedback-user" 
            style="max-width: 300px; margin: auto;"
            v-model="username"
          >
          </b-form-input>
        </b-form>
      </section>
      
      <section>
        <b-form @submit.stop.prevent>
          <label for="text-password">Password</label>
          <b-form-input 
            type="password" 
            class="text-password" 
            aria-describedby="password-help-block" 
            style="max-width: 300px; margin: auto;"
            v-model="password"
          >
          </b-form-input>
        </b-form>
      </section>
      
      <b-button type="submit" variant="outline-primary">CONNEXION</b-button>

    </form>

    
    <hr>
    <p>Pas encore inscrit ? 
        <b-button variant="outline-success" >
            <router-link to="/signup" id="LinkSignup">
                Créer un compte
            </router-link>
        </b-button>
    </p>


  </b-card>
</template>

<script>
import axios from "axios";
export default {
    name: "createPost"
}
</script>

<style>

</style>
