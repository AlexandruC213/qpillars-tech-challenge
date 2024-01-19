const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/HomePage.vue") },
      {
        path: "/marketplace",
        component: () => import("pages/MarketplacePage.vue"),
      },
      { path: "/rankings", component: () => import("pages/RankingPage.vue") },
      {
        path: "/connect-wallet",
        component: () => import("pages/ConnectWalletPage.vue"),
      },
      { path: "/register", component: () => import("pages/RegisterPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: "/:catchAll(.*)*",
  //   component: () => import("pages/ErrorNotFound.vue"),
  // },
];

export default routes;
