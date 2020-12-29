<template>
  <b-card tag="article" style="max-width: 35rem;" class="container mt-2 shadow ">

    <form method="POST" @submit.prevent="login">

      <section class="mt-3">
        <b-form>
          <label for="feedback-user">Email</label>
          <b-form-input  
            type="email"
            class="width-marge"
            id="feedback-user" 
            v-model="email"
          >
          </b-form-input>
        </b-form>
      </section>
      
      <section>
        <b-form>
          <label for="text-password">Password</label>
          <b-form-input 
            type="password" 
            class="text-password width-marge" 
            aria-describedby="password-help-block" 
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
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    login: function()  {
      if ( this.email !== null || this.password !== null) {
        axios.post("http://localhost:3000/api/auth/login",
          { email: this.email, password: this.password}
        )
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem(response.data.userId);
          location.replace(location.origin);
        })
        .catch((error) => console.log(error))
      } 
      else {console.log("Erreur est survenue !")}
    },
  }
 
};
</script>

<style>
  .width-marge{
    max-width: 300px; 
    margin: auto;
  }

  #LinkSignup{
    transition-duration: 0.3s;
      color: #34cf58;
    }
  #LinkSignup:hover{
    color: white;
  }
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
