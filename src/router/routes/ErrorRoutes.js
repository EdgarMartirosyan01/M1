const ErrorRoutes = [
    {
        path: "/error/404",
        name: "404",
        component: () => import("@/components/pages/error/Error404Page.vue"),
    },
];

export default ErrorRoutes;
