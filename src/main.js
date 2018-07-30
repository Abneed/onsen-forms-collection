// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

// JS import
import Vue from 'vue'
import VueOnsen from 'vue-onsenui'; // This already imports 'onsenui'
import App from './components/IniciarSesion.vue'

Vue.use(VueOnsen); // Plugin VueOnsen to Vue.

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')