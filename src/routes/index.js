import FullPost from "../components/FullPost"
import Home from "../components/Home"
import New from "../components/New"
import Update from "../components/Update"
// public route
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/new', component: New},
    {path: '/post/:id', component: FullPost},
    {path: '/post/:id/edit', component: Update}
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes}