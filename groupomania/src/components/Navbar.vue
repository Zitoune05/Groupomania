<template>
<div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="./Home">
            GROUPOMANIA
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto"> 

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <b-icon icon="chat-left-dots-fill" scale="1" variant="light "></b-icon>
                            <em>   Forum</em>
                        </template>
                        <b-dropdown-item href="#">Style Reddit</b-dropdown-item>
                        <b-dropdown-item href="#">Style 9GAG</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <em><b-icon icon="person-circle" scale="1" variant="light "></b-icon> Mon compte</em>
                        </template>
                        <b-dropdown-item href="#">Connexion</b-dropdown-item>
                        <b-dropdown-item href="#">Inscription</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    
}
</script>

<style >
    .Navbar {
        background-color: #32bcc3;
        padding: 1%;
    }
</style>