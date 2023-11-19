import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/Home.vue";
import LoginView from "@/views/Login.vue";
import DepartmentView from "@/views/department/DepartmentView.vue";
import EmployeesTable from "@/views/department/components/EmployeesTable.vue";
import RecruitmentTable from "@/views/department/components/RecruitmentTable.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: { name: "login" },
      component: HomeView,
      children: [],
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/department",
      name: "department",
      component: DepartmentView,
      redirect: { name: "employees" },
      children: [
        {
          path: "employees",
          name: "employees",
          component: EmployeesTable,
        },
        {
          path: "recruiment",
          name: "recruiment",
          component: RecruitmentTable,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const pathsPermitted = [
    "login",
    "home",
    "department",
    "employees",
    "recruiment",
  ];

  if (pathsPermitted.includes(to.name?.toString() || "")) {
    next();
  } else {
    next({ name: "login" });
  }
});

export default router;
