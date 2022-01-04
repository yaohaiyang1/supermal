import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../veiws/home/Home.vue')
const Cart = () => import('../veiws/cart/Cart.vue')
const Category = () => import('../veiws/category/Category.vue')
const Profile = () => import('../veiws/profile/Profile.vue')
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect:'/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/profile',
        component: Profile
    },
]
const router = new VueRouter({
    routes
})
export default router;