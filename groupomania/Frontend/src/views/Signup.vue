<template>
  <b-card tag="article" style="max-width: 35rem;" class="container mt-2 shadow ">

    <section>
      <h1>S'inscire</h1>
      <p> C'est facile et rapide !</p>
    </section>
    <hr>

    <form method="POST" @submit.prevent = "envoi">

      <section>
        <b-form @submit.stop.prevent>
          <label for="email">Email</label>
          <b-form-input v-model="email" id="email" type="email" aria-describedby="password-help-block" style="max-width: 300px; margin: auto;"></b-form-input>
        </b-form>
      </section>

      <section class="mt-3">
        <b-form  @submit.stop.prevent>
          <label for="username">Pseudo</label>
          <b-form-input v-model="username" id="username" style="max-width: 300px; margin: auto;"></b-form-input>
        </b-form>
      </section>
      
      <section>
        <b-form @submit.stop.prevent>
          <label for="password">Password</label>
          <b-form-input v-model="password" id="password"  type="password" class="text-password" aria-describedby="password-help-block" style="max-width: 300px; margin: auto;"></b-form-input>
        </b-form>
      </section>

      <section>
        <b-form @submit.stop.prevent>
          <label for="confirmPassword">Confirm Password</label>
          <b-form-input v-model="confirmPassword" id="confirmPassword" type="password" class="text-password" aria-describedby="password-help-block" style="max-width: 300px; margin: auto;"></b-form-input>
        </b-form>
      </section><hr>
      
      <b-button variant="outline-primary">CONFIRMER</b-button>

    </form>  

  </b-card>
</template>
<script>
import axios from 'axios'

export default {
    name: "Signup",
    data(){
      return{
        email:"",
        username:"",
        password:"",
        confirmPassword:""   
       }
    },
    methods:{
      //sendSignup envoi le formulaire d'inscription à l'API
      sendSignup () {
        let token = ""
        if (this.email == "" || this.username == "" || this.password == ""  ){
          alert('Vous n\'avez pas bien rempli le formulaire !')
        }
        else if (this.password != this.confirmPassword){
          alert('Les mots de passe saisis ne sont pas identiques !')
        }
        else {
          axios.post('http://localhost:3000/api/signup', {
            email: this.email,
            username: this.username,
            password: this.password,
          },
          {
            headers: {
              'Content-type': 'application/json',
              'Authorization': `Bearer${token}`
                }
          })
          .then(function (response) {
            //On traite la suite une fois la réponse obtenue 
            console.log(reponse);
            let reponse = response.data;
            let userObject = JSON.stringify(reponse);
            this.$localStorage.set('user', userObject)
            let user = JSON.parse(this.$localStorage.get('user'));
            token = user.token;//Token d'authentification
            alert('Félicitation vous êtes désormais inscrit, connectez-vous dès maintenant')
            window.location.href = "http://localhost:8080//#/signup"
          })
          .catch(function (erreur) {
            //On traite ici les erreurs éventuellement survenues
            console.log(erreur);
          })
        }
      },
      verif: function() {//Fonction de vérification du password
        if (this.password != this.password2){
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