import HomeContainer from "../components/pages/home/HomeContainer";
import ProductsListContainer from "../components/pages/productsList/ProductsListContainer";
import ProductDetailContainer from "../components/pages/detail/ProductDetailContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";



export const menuRoutes = [
    {
        id:"home",
        path: "/",
        Element: HomeContainer
    },
    {
        id:"detail",
        path: "/detail/:id",
        Element: ProductDetailContainer
    },
    {
        id:"category",
        path: "/category/:categoryName",
        Element: ProductsListContainer
    },
    {
        id:"checkout",
        path: "/checkout",
        Element: CheckoutContainer
    },
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