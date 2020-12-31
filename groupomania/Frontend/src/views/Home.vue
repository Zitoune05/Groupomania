<template>
  <div>
    <b-container  id="feed">

        <!----------  IF not connected ------------->
          <Wall/>
        
       <!----------- ELSE APP card  ------------->

    </b-container>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Wall from '../components/Posts/AllPosts';

export default {
  name: 'Home',
  components: {
    Wall
  }
}
</script>

<style >
  #title{
    color: rgb(253, 45, 1);
    font-size: 2.5rem;
  }
</style>
