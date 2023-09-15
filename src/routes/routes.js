import HomeContainer from "../components/pages/home/HomeContainer";
import ProductsListContainer from "../components/pages/productsList/ProductsListContainer";

export const menuRoutes = [
    {
        id:"home",
        path: "/",
        Element: HomeContainer
    },
    // {
    //     id:"detail",
    //     path: "/detail/:id",
    //     Element: ProductDetail
    // },
    {
        id:"category",
        path: "/category/:categoryName",
        Element: ProductsListContainer
    },
    // {
    //     id:"checkout",
    //     path: "/checkout",
    //     Element: Checkout
    // },
    // {
    //     id:"login",
    //     path: "/login",
    //     Element: Login
    // },
    // {
    //     id:"register",
    //     path: "/register",
    //     Element: Register
    // }
]