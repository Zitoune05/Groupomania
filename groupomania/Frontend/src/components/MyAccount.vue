<template>

    <main>

        <section>
            <b-card tag="article" style="max-width: 35rem;" class="mb-2 shadow mx-auto">

                <b-card id="CardImagePosted">
                    <b-avatar style="background-color: rgb(97, 135, 170)" size="7.5rem" class="shadow" ></b-avatar>
                </b-card>

                <div >

                    <h1>UserID</h1>

                    <b-button href="#" style="background-color: rgb(97, 135, 170)">  <b-icon icon="pencil-fill"></b-icon> Modifier mon profil</b-button>

                    <div class="Userinformation mt-5"> 
                        <p> UserName:  user.name }}</p>

                        <p> Email:  user.email }}</p>

                        <p> UserBirthday:  user.birthday }}</p>

                        <p> Service:  user.service }}</p>

                        <p> Supprimer mon profil (apparait une fois le bouton modifier mon profil actionné)</p> 
                    </div>

                </div>

            </b-card>  

        </section>

        <section> 
            <b-card tag="article" style="max-width: 35rem;" class="mb-2 shadow mx-auto">  
            return publication.userid
            </b-card>
        </section>
    </main> 

</template>

<script>
export default {
    name: "MyAccount",
    data() {
      return {
        mainProps: { blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1' }
      }
    }
}
</script>

<style >

</style>