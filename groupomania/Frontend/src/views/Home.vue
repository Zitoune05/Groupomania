<template>
  <div>
    <b-container fluid  id="feed">

      <b-row>
        <!----------  IF not connected ------------->
          <Signin/>
        
       <!----------- ELSE APP card  ------------->
      </b-row>

    </b-container>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Signin from './Signin.vue'

export default {
  name: 'Home',
  components: {
    Signin
  }
}
</script>

<style >
  #title{
    color: rgb(253, 45, 1);
    font-size: 2.5rem;
  }
</style>
