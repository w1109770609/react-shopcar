import Home from '../views/home/home'
import Hospital from '../views/hospital/hospital'
import People from '../views/people/people'
let router = {
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/hospital',
            component:Hospital,
            children:[
                {
                    path:'/hospital/people',
                    component:People
                }
            ]
        }
    ]
}
export default router