import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login/Login.vue";
import RegisterUser from "../views/Register/RegisterUser.vue";
import Dashboard from "../views/Dashboard/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterUser,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
