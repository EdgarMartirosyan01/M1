import ErrorRoutes from "@/router/routes/ErrorRoutes";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";

const routes = [
    {
        path: '/',
        component: () => import("@/components/layout/AppLayout.vue"),
        children: [
            {
                path: "/",
                component: () => import("@/components/pages/home/HomePage.vue"),
            },
            {
                path: "/blocks",
                component: () => import("@/components/pages/blocks/BlocksPage.vue"),
            },
            {
                path: "/about",
                component: () => import("@/components/pages/about/AboutPage.vue"),
            },
            {
                path: "/services",
                component: () => import("@/components/pages/services/ServicesPage.vue"),
            },
            {
                path: "/portfolio",
                component: () => import("@/components/pages/portfolio/PortfolioPage.vue"),
            },
            {
                path: "/delivery",
                component: () => import("@/components/pages/delivery/DeliveryPage.vue"),
            },
            {
                path: "/contacts",
                component: () => import("@/components/pages/contacts/ContactsPage.vue"),
            },
        ]
    },
    {
        path: "/error",
        component: () => import("@/components/pages/error/Error404Page.vue"),
        children: ErrorRoutes
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/error/404",
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.path === '/about' && to.hash) {
            setTimeout(() => {
                document.getElementsByTagName('html')[0].scrollTop =
                    document.getElementsByTagName('html')[0].scrollHeight
            })
        } else {
            return {behavior: 'smooth',  left: 0, top: 0 };
        }
    }
})
function routerAuthGuard() {
        let isAuthenticated = localStorage.getItem('vn_admin_provider_key');
        if (!isAuthenticated) {
            return '/'
 }
}
export default router;