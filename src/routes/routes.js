import HomeContainer from "../components/pages/home/HomeContainer";
import ProductsListContainer from "../components/pages/productsList/ProductsListContainer";
import ProductDetailContainer from "../components/pages/detail/ProductDetailContainer";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
import LoginContainer from "../components/pages/login/LoginContainer";
import RegisterContainer from "../components/pages/register/RegisterContainer";



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
    {
        id:"login",
        path: "/login",
        Element: LoginContainer
    },
    {
        id:"register",
        path: "/register",
        Element: RegisterContainer
    },
    // {
    //     id: "dasboard",
    //     path: "/dashboard",
    //     Element: DashboardContainer
    // }
]