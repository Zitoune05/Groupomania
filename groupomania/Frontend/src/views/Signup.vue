<template>
  <b-card tag="article" style="max-width: 35rem;" class="container mt-2 shadow ">

    <section>
      <h1>S'inscire</h1>
      <p> C'est facile et rapide !</p>
    </section>
    <hr>

    <form method="POST" @submit.prevent = "checkForm">

      <section>
        <b-form @submit.stop.prevent>
          <label for="email">Email</label>
          <b-form-input 
            id="email"
            v-model="signupData.email"
            style="max-width: 300px; margin: auto;"  
            type="email" 
            aria-describedby="password-help-block" >
          </b-form-input>
        </b-form>
      </section>

      <section class="mt-3">
        <b-form  @submit.stop.prevent>
          <label for="username">Pseudo</label>
          <b-form-input 
            id="username"
            v-model="signupData.username"  
            style="max-width: 300px; margin: auto;"
            type="text">
          </b-form-input>
        </b-form>
      </section>
      
      <section>
        <b-form @submit.stop.prevent>
          <label for="password">Password</label>
          <b-form-input 
            id="password"
            v-model="signupData.password"   
            type="password" 
            class="text-password" 
            aria-describedby="password-help-block" 
            style="max-width: 300px; margin: auto;">
          </b-form-input>
        </b-form>
      </section>

      <section>
        <b-form @submit.stop.prevent>
          <label for="confirmPassword">Confirm Password</label>
          <b-form-input 
            id="confirmPassword"
            v-model="signupData.confirmPassword"  
            type="password" 
            class="text-password" 
            aria-describedby="password-help-block" 
            style="max-width: 300px; margin: auto;"
          ></b-form-input>
        </b-form>
      </section><hr>
      
      <b-button 
        type="submit"
        variant="outline-primary"
      >
        CONFIRMER
      </b-button>

    </form>  

  </b-card>
</template>

<script>
import axios from 'axios'

export default {
    name: "Signup",
    data(){
      return{
        signupData: {
          email:"",
          username:"",
          password:"",
          confirmPassword:""  
        }
       }
    },
    methods:{

      //checkForm envoi le formulaire d'inscription à l'API
      checkForm: function () {

        
        // Si l'un des champs est nul 
        if (!this.signupData.email || !this.signupData.username || !this.signupData.password || !this.signupData.confirmPassword ){
          alert('Champ requis !')
        }

        // Si les deux mots de passe de correspondent pas
        else if (this.signupData.password != this.signupData.confirmPassword){
          alert('Les mots de passe saisis ne sont pas identiques !')
        }
        // Méthode POST envoi les infos à la DATABASE
        else {
          alert('Cest bon');
          axios.post( 'http://localhost:3000/api/signup', this.signupData )
            
          //On traite la suite une fois la réponse obtenue 
          .then((response) => {
            console.log(response);
            alert('Votre inscription est validée !')
            location.replace(location.origin);
          })

          //On traite ici les erreurs éventuellement survenues
          .catch((erreur) => {
            console.log("erreur d'inscription" + erreur);
          })
        }
      }
    }
}
</script>

<style>
  section{
    margin-bottom: 2rem;
  }

  hr{
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  opacity: .5;
  }

  hr::before {
    content: '';
    background: linear-gradient(to right, transparent, #818078, transparent);
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
  }
 hr::after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    color: black;

    padding: 0 .5em;
    line-height: 1.5em;
    color: #818078;
    background-color: #fcfcfa;
  }
</style>