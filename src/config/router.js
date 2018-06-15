import React,{ Component } from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
class Router extends Component{
    render(){
        let {routes} = this.props;
        return (
            <BrowserRouter>
                <Switch>
                    {
                        routes.map((item,index)=>{
                            return <Route key={index} path={item.path} render={(history)=>{
                                if(item.children){
                                    return <item.component child={item.children} {...history}></item.component>
                                }else{
                                    return <item.component {...history}></item.component>
                                }
                            }}></Route>
                        })
                    }
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Router