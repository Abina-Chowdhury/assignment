import { createRouter, createWebHistory } from "vue-router"
import HomeVue from "./components/Home/Home.vue"
import AddBlogVue from "./components/AddBlog/AddBlog.vue"
import BlogDetailVue from "./components/BlogDetail/BlogDetail.vue"
const routes = [
    {
        path: '/',
        component: HomeVue
    },
    {
        path: '/menu',
        component: AddBlogVue
    },
    {
        path: '/menu',
        component: BlogDetailVue
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;