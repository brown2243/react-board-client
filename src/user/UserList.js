import React, {Component} from 'react'
import ApiService from '../ApiService'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CreateIcon from '@material-ui/icons/Create'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

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
    
    addUser = () => {
        window.localStorage.removeItem('id')
        this.props.history.push('/add-user')
    }
    editUser = (id) =>{
        window.localStorage.setItem('id',id)
        this.props.history.push('/edit-user')
    }
    deleteUser = (id) =>{
        if(window.confirm('삭제하시겠습니까?')){
            ApiService.deleteUser(id)
            .then(res =>{
                this.setState({
                    message:'삭제 성공!!!',
                    users: this.state.users.filter(user => user.id !== id)
                })
                alert("삭제 성공!")
            })
            .catch(err => {
                console.error("deleteUser() error", err)
                alert('유저 삭제 실패!!!')
            })
        }

    }
    render(){
        console.log('render Run')
        console.log(this.state.users)
        return(
            <div>
                <Typography variant='h6' style={style}>User List</Typography>
                <Button 
                    variant="contained" 
                    color='primary' 
                    type='button'
                    onClick={this.addUser}
                    >추가</Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>ID</TableCell>
                            <TableCell align='center'>UserName</TableCell>
                            <TableCell align='center'>FirstName</TableCell>
                            <TableCell align='center'>LastName</TableCell>
                            <TableCell align='center'>Gender</TableCell>
                            <TableCell align='center'>Salary($)</TableCell>
                            <TableCell align='center'>Edit</TableCell>
                            <TableCell align='center'>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.users.map(user => 
                        <TableRow key={user.id}>
                            <TableCell align='right'>{user.id}</TableCell>
                            <TableCell align='left'>{user.userName}</TableCell>
                            <TableCell align='left'>{user.firstName}</TableCell>
                            <TableCell align='left'>{user.lastName}</TableCell>
                            <TableCell align='center'>{user.gender}</TableCell>
                            <TableCell align='right'>{user.salary}</TableCell>
                            <TableCell align='center' onClick={() => this.editUser(user.id)}><EditIcon /></TableCell>
                            <TableCell align='center' onClick={() => this.deleteUser(user.id)}><DeleteIcon /></TableCell>
                            
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

const style = {
    display:'flex',
    justifyContent:'center',
    marginTop:'40px'
}
export default UserList;