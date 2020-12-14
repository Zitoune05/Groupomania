<script>
export default {
    name: 'Navbar',
}
</script>

<template>
    <header >
        <b-navbar  toggleable="sm" type="dark" class='Navbar shadow'>

            <b-navbar-brand>
                <router-link to="/">
                    <img
                        id="Logo"
                        alt="logo de l'entreprise"
                        src="../assets/icon-left-font-monochrome-white.svg"
                        width="200px"
                    />
                </router-link>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto"> 

                    <b-nav-item-dropdown right >

                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <b-icon icon="chat-left-dots-fill" scale="1.2" variant="light"></b-icon>
                        </template>

                        <b-dropdown-item href="#">Create post</b-dropdown-item>
                        <b-dropdown-item href="#">Style 9GAG</b-dropdown-item>

                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>

                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <em><b-icon icon="person-circle" scale="1.2" variant="light "></b-icon></em>
                        </template>

                        <b-dropdown-item>
                            <router-link to="/signup">
                                S'inscrire
                            </router-link>
                        </b-dropdown-item>

                        <b-dropdown-item>
                            <router-link to="/myaccount">
                                Mon Profil
                            </router-link>
                        </b-dropdown-item>

                        <b-dropdown-item>
                            <router-link to="/">
                                Se déconnecter
                            </router-link>
                        </b-dropdown-item>

                    </b-nav-item-dropdown>

                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </header>
</template>



<style >
    .Navbar {
        background-color: rgb(97, 135, 170);
        padding: 1%;
        color: white;
    }
</style>