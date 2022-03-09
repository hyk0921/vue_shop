import MSite from "@/pages/MSite/MSite"
import Order from "@/pages/Order/Order"
import Profile from "@/pages/Profile/Profile"
import Search from "@/pages/Search/Search"
import Login from "@/pages/Login/Login"
import Shop from "@/pages/Shop/Shop"
import Goods from "@/pages/Shop/Goods"
import Ratings from "@/pages/Shop/Ratings"
import Info from "@/pages/Shop/Info"

export default [
    {
        path:'/msite',
        component:MSite,
        meta:{isShowFoot:true}
    },
    {
        path:'/search',
        component:Search,
        meta:{isShowFoot:true}
    },
    {
        path:'/order',
        component:Order,
        meta:{isShowFoot:true}
    },
    {
        path:'/profile',
        component:Profile,
        meta:{isShowFoot:true}
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/shop/:id',
        props:route=>({id:route.params.id}),
        component:Shop,
        children:[
            {
                path:'goods',
                component:Goods
            },
            {
                path:'ratings',
                component:Ratings
            },
            {
                path:'info',
                component:Info
            },
            {
                path:'',
                redirect:'goods'
            },
        ]
    },
    {
        path:'/',
        redirect:'/msite'
    },
]