const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/HomePage.vue") },
      { path: "/register", component: () => import("pages/RegisterPage.vue") },
    ],
  },
];

export default routes;
