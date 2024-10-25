import App from '@/App.vue';
import { registerPlugins } from '@core/utils/plugins';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

// Styles
import '@core/scss/template/index.scss';
import '@styles/styles.scss';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import BootstrapVue 3
import { BootstrapVue3 } from 'bootstrap-vue-3';

// Create Vue app
const app = createApp(App);
const pinia = createPinia();

// Use BootstrapVue3
app.use(BootstrapVue3);
app.use(pinia);

// Register plugins
registerPlugins(app);

// Mount Vue app
app.mount('#app');
