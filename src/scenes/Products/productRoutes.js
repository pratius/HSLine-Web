
import ProductDetail from "./components/product-detail-view";
import ProductLanding from "./components/product-landing";
import { Product } from "./";

export default {
    path: "/product",
    component: Product,
    strict: true,
    routes: [
        {
            path: "/product/category",
            component: ProductLanding,
            exact: true,
            isProtected: false,
        },
        {
            path: "/product/detail",
            component: ProductDetail,
            exact: true,
            isProtected: false,
        },
    ]
}

