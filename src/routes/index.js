import Home from "../components/Home"
import New from "../components/New"
// public route
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/new', component: New}
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes}