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
            v-model="singupData.email"
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
            v-model="singupData.username"  
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
            v-model="singupData.password"   
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
            v-model="singupData.confirmPassword"  
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
        singupData: {
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
        if (!this.singupData.email || !this.singupData.username || !this.singupData.password || !this.singupData.confirmPassword ){
          alert('Champ requis !')
        }

        // Si les deux mots de passe de correspondent pas
        else if (this.singupData.password != this.singupData.confirmPassword){
          alert('Les mots de passe saisis ne sont pas identiques !')
        }
        else if (!this.validEmail(this.singupData.email)) {
        alert('Valid email required !')
        }
        // Méthode POST envoi les infos à la DATABASE
        else {
          alert('Cest bon');
          axios.post( 'http://localhost:3000/api/signup', this.singupData )
            
          //On traite la suite une fois la réponse obtenue 
          .then(function (response) {
            console.log(reponse);
            let reponse = response.data;
            let userObject = JSON.stringify(reponse);
            this.$localStorage.set('user', userObject)
            alert('Votre inscription est validée !')
            window.location.href = "http://localhost:3000//#/singin"
          })

          //On traite ici les erreurs éventuellement survenues
          .catch(function (erreur) {
            console.log(erreur);
          })
        }
      },
      validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
      },
      verif: function() {//Fonction de vérification du password
        if (this.singupData.confirmPassword != this.singupData.confirmPassword){
          document.getElementById('confirm').innerHTML = 'Veuillez entrer le même mot de passe'
        } else {
          document.getElementById('confirm').innerHTML = ''
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