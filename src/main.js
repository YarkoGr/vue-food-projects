import "./styles/style.scss";
import "ant-design-vue/dist/antd.css";

import Antd from "ant-design-vue";
import VueAnimXYZ from "@animxyz/vue";
import { Plugin } from "vue-responsive-video-background-player";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(Plugin);
Vue.use(VueAnimXYZ);
Vue.use(Antd);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");