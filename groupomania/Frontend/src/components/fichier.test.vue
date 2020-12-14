import { BootstrapVue, iconPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// Utiliser bootstrap vue https://bootstrap-vue.org/docs 


Vue.use(BootstrapVue)
Vue.use (iconPlugin)


--------------------------------------------------------------

<div>
        
        <b-nav align="right" class="Navbar">
            <b-nav-item>
                <b-icon icon="house-door-fill" scale="1" variant="light "></b-icon>
            </b-nav-item>
            <b-nav-item>
                <b-icon icon="person-plus-fill" scale="1" variant="light "></b-icon>
            </b-nav-item>
            <b-nav-item>
                <b-icon icon="arrow90deg-right" scale="1" variant="light "></b-icon>
            </b-nav-item>
        </b-nav>
    </div>

    nav differente
    
------------------------------------------

<b-form-text id="password-help-block">
          Your user ID must be 5-12 characters long.
        </b-form-text>

        