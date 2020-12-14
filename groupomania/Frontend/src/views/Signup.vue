<template>
  <b-card tag="article" style="max-width: 35rem;" class="container mt-2 shadow ">

    <section>
      <h1>S'inscire</h1>
      <p> C'est facile et rapide !</p>
    </section>
    <hr>
    
    <section>
      <b-form @submit.stop.prevent>
        <label for="text-password">Email</label>
        <b-form-input type="email" id="text-password" aria-describedby="password-help-block" style="max-width: 300px; margin: auto;"></b-form-input>
      </b-form>
    </section>

    <section class="mt-3">
      <b-form  @submit.stop.prevent>
        <label for="feedback-user">User ID</label>
        <b-form-input v-model="userId" :state="validation" id="feedback-user" style="max-width: 300px; margin: auto;"></b-form-input>
      </b-form>
    </section>
    
    <section>
      <b-form @submit.stop.prevent>
        <label for="text-password">Password</label>
        <b-form-input type="password" class="text-password" aria-describedby="password-help-block" style="max-width: 300px; margin: auto;"></b-form-input>
      </b-form>
    </section>

    <section>
      <b-form @submit.stop.prevent>
        <label for="text-password">Confirm Password</label>
        <b-form-input type="password" class="text-password" aria-describedby="password-help-block" style="max-width: 300px; margin: auto;"></b-form-input>
      </b-form>
    </section><hr>
    
    <b-button variant="outline-primary">CONFIRMER</b-button>

  </b-card>
</template>

<script>

export default {
    name: "Signup",
    data() {
        return {
            dataSignup: {
                username: null,
                email: null,
                password: null,
            },
            msg: "",
        };
    }
};
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
