import React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import UserList from '../user/UserList'
import AddUser from '../user/AddUser'

class Router extends Component {
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path='/'component={UserList} />
                            <Route path='/users'component={UserList} />
                            <Route path='/add-user'component={AddUser} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
export default Router