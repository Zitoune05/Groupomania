<template>
  <div>
    <b-container fluid  id="feed">

      <b-row style="border: red 1px solid">
        <!----------  IF not connected ------------->
          <AppCard/>
        
       <!----------- ELSE APP card  ------------->
      </b-row>

    </b-container>
    
  </div>
</template>

<script>
// @ is an alias to /src
import AppCard from '../components/Posts/AppCard';

export default {
  name: 'Home',
  components: {
    AppCard
  }
}
</script>

<style >
  #title{
    color: rgb(253, 45, 1);
    font-size: 2.5rem;
  }
</style>
