<template>
  <div>
    <b-container fluid  id="feed">

      <b-row style="border: red 1px solid">
        <!----------  IF not connected ------------->
          <CardPost/>
        
       <!----------- ELSE APP card  ------------->
      </b-row>

    </b-container>
    
  </div>
</template>

<script>
// @ is an alias to /src
import CardPost from '../components/Posts/CardPost';

export default {
  name: 'Home',
  components: {
    CardPost
  }
}
</script>

<style >
  #title{
    color: rgb(253, 45, 1);
    font-size: 2.5rem;
  }
</style>
