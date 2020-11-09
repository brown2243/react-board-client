import React, {Component} from 'react'
import ApiService from '../route/ApiService'

class UserList extends Component{
    constructor(props){
        super(props)

        this.state={
            users:[],
            message:null,

        }
        console.log("constructor Run")
    }
    componentDidMount(){
        console.log('componentDidMount Run')
        this.reloadUserList()
    }

    reloadUserList(){
        ApiService.fetchUsers()
                  .then(res =>{
                    this.setState({users:res.data})
                  })
                  .catch(err =>{
                      console.error('reloadUserList() 에러!',err)
                  })
    
    }

    componentWillUnmount(){
        console.log('componentWillUnmount Run')
    }

    render(){
        console.log('render Run')
        return(
            <div>
                <h4>User List</h4>
                <input type='button' value='사용자 추가' />
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>UserName</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Gender</th>
                            <th>Salary</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user => {
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.userName}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.gender}</td>
                            <td>{user.salary}</td>
                            <td>edit</td>
                            <td>delete</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default UserList;