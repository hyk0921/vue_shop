import MSite from "@/pages/MSite/MSite"
import Order from "@/pages/Order/Order"
import Profile from "@/pages/Profile/Profile"
import Search from "@/pages/Search/Search"
import Login from "@/pages/Login/Login"
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
        path:'/',
        redirect:'/msite'
    },
]