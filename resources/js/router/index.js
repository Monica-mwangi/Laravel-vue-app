import { createRouter, createWebHistory } from "vue-router";
import productIndex from '../components/products/Index.vue';
import notFound from '../components/notFound.vue'


const routes =[
    {
        path:'/',
        name:'products.index',
        component:productIndex
    },
    {
        path:'/:pathMatch(.*)*',
        name:'notfound',
        component:notFound
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router;