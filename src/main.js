import Vue from "vue";
import App from "./App";
import router from "./router";
import VueResource from "vue-resource";

Vue.use(VueResource);

Vue.http.options.root = 'http://404notfound.nl/trukker/';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
