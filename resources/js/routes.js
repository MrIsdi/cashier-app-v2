import ListProduct from './components/ListProduct/'
import ListCart from './components/ListCart/'

export const routes = [
    {
        path: "/",
        name: "ListProduct",
        component: ListProduct
    },
    {
        path: "/cart",
        name: "ListCart",
        component: ListCart
    },
]
