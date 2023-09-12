import HomeContainer from "../components/pages/home/HomeContainer";

export const menuRoutes = [
    {
        id:"home",
        path: "/",
        Element: HomeContainer
    },
    {
        id:"detail",
        path: "/detail/:id",
        Element: ProductDetail
    },
    {
        id:"category",
        path: "/detail/:name",
        Element: ProductCategory
    },
    {
        id:"checkout",
        path: "/checkout",
        Element: Checkout
    },
    {
        id:"login",
        path: "/login",
        Element: Login
    },
    {
        id:"register",
        path: "/register",
        Element: Register
    }
]