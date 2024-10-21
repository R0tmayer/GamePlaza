import {createRouter, createWebHistory} from "vue-router";

import Catalog from "@pages/Catalog.vue";
import Login from "@pages/Login.vue";
import Register from "@pages/Register.vue";
import ShoppingCart from "@pages/ShoppingCart.vue";
import Dashboard from "@pages/Dashboard.vue";
import Customers from "@pages/Customers/Customers.vue";
import Products from "@pages/Products/Products.vue";
import Sales from "@pages/Sales/Sales.vue";

const routes = [
    {path: "/", component: Catalog},
    {path: "/catalog", component: Catalog},
    {path: "/login", component: Login},
    {path: "/register", component: Register},
    {path: "/shoppingCart", component: ShoppingCart},
    {
        path: "/dashboard", component: Dashboard, children: [
            {path: "customers", component: Customers},
            {path: "products", component: Products},
            {path: "sales", component: Sales},
        ]
    },]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})