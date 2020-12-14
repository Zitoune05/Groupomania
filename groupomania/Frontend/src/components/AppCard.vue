<template>
  <div class="mx-auto">
    
    <b-card tag="article" style="max-width: 35rem;" class="mb-2 shadow" >

      <template #header>
         <div class="headerPost">
            <b-avatar id='CardUserImage' src="https://placekitten.com/300/300"></b-avatar>
            <em>"date"  &  </em> 
            <em>"heure"</em>
          </div>
      </template>

      <b-card id="CardImagePosted"
        img-src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.15752-9/131075760_229752241874821_3156199757893394385_n.png?_nc_cat=106&ccb=2&_nc_sid=ae9488&_nc_ohc=9oOqHw0i_B0AX_WrMlW&_nc_ht=scontent-cdt1-1.xx&oh=ac67c4f0486325277ee761ab46b1f4be&oe=5FF760F0"
        img-alt="Mème"
        img-top >
      </b-card>

      <b-card-text>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero aspernatur quisquam provident at repellat facere commodi vitae laudantium! Delectus, optio! Eaque rerum a animi sapiente vero recusandae officia fugit dolorum.
        </p>
      </b-card-text>
      
      <template #footer >
        <b-button href="#" style="margin-right: 2rem">Likes</b-button>
        <b-button href="#" >Comments</b-button>
      </template>

    </b-card>
  </div>
</template>

<script>
export default {
  name: 'AppCard'
}
</script>

<style >
  .headerPost{
    display: flex;
    align-items: baseline;
  }
  #CardImagePosted{
    border: 0px ;
  }
</style>