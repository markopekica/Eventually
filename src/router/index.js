import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/Login.vue"),
    meta: {
      blockUser: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
    meta: {
      blockUser: true,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/eventInfo",
    name: "EventInfo",
    component: () => import("../views/EventInfo.vue"),
  },
  {
    path: "/userProfile",
    name: "UserProfile",
    component: () => import("@/views/UserProfile.vue"),
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/addEvent",
    name: "AddEvent",
    component: () => import("../views/AddEvent.vue"),
    meta: {
      needsUser: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const noUser = store.currentUser === null;
  //"ako nemam usera, a stranica na koju želim ići treba usera:"
  if (noUser && to.meta.needsUser) {
    next("login");
    //console.error("NE MOŽE");
  } else {
    next();
  }
});

export default router;
