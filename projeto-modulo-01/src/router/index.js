import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login/Login.vue";
import RegisterUser from "../views/Register/RegisterUser.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "registerUser",
      component: RegisterUser,
    },
  ],
});

export default router;
