import { createApp } from 'vue';
import App from './App.vue';
import config from './config';
import router from './router';
import store from './store';
import axios from 'axios';

const app = createApp(App);
axios.defaults.withCredentials = process.env.NODE_ENV === 'production';

app.config.globalProperties.$http = axios.create({
  baseURL: config.apiUrl,
  timeout: 20000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem(`${config.appKey}_token`)}`,
  },
});

app.config.globalProperties.$http.interceptors.response.use(
  response => response,
  error => {
    if (error && error.response && error.response.status === 401) {
      const url = error.response
        && error.response.config
        && error.response.config.url;
      console.warn('user is not authorized, logging out:', error.response.config );
      if (
        localStorage.getItem(`${config.appKey}_token`)
        && url
        && url.indexOf('/login') === -1
        && url.indexOf('/reset-password') === -1
        && url.indexOf('/forgot') === -1
        && url.indexOf('/register') === -1
        && url.indexOf('/models') === -1
      ) {
        store.dispatch('user/logout');
        if (vInstance && vInstance.$router) {
          vInstance.$router.push('/login');
        }
        // v.$notify("Your session has expired");
      }
    }
    return Promise.reject(error);
  },
);

app.use(store)
app.use(router)
app.mount('#app');
