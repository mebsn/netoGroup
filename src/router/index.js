import Vue from "vue";
import Router from "vue-router";
import HomePage from "./../components/HomePage.vue";
import ContactUs from "./../components/ContactUs.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        { path: "/", component: HomePage },
        { path: "/ContactUs", component: ContactUs },
    ],
});