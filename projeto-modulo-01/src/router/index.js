import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login/Login.vue";
import RegisterUser from "../views/Register/RegisterUser.vue";
import Dashboard from "../views/Dashboard/Dashboard.vue";
import ExerciseManagement from "../views/ExerciseManagement/ExerciseManagement.vue";
import StudentManagement from "../views/StudentManagement/StudentManagement.vue";
import NewStudent from "../views/NewStudentRegistration/NewStudentRegistration.vue";
import TrainingRegistration from "../views/TrainingRegistration/TrainingRegistration.vue";

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
  {
    path: "/exercicios",
    name: "exerciseManagement",
    component: ExerciseManagement,
  },
  {
    path: "/alunos",
    name: "StudentManagement",
    component: StudentManagement,
  },
  {
    path: "/novo-aluno",
    name: "NewStudent",
    component: NewStudent,
  },
  {
    path: "/cadastro-treinos",
    name: "TrainingRegistration",
    component: TrainingRegistration,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
