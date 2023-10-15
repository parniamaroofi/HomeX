import { createApp } from 'vue';
import './assets/style.scss';
import App from './App.vue';
import router from './router/index.js';

// Vuetify
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { customIcons } from '@/assets/customIcons.js';

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
      svg: customIcons,
    },
  },
  components,
  directives,
});

const app = createApp(App);
app.use(vuetify);
app.use(router).mount('#app');
