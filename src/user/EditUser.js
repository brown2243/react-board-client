import React, {Component} from 'react'
import ApiService from '../ApiService'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import NativeSelect from '@material-ui/core/NativeSelect'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'

class EditUser extends Component{
    constructor(props){
        super(props)

        this.state={
            id: '',
            userName: '',
            password: '',
            firstName: '',
            lastName: '',
            gender:'',
            salary:'',
            message:null
        }
    }

    componentDidMount(){
        this.loadUser()
    }
    loadUser = () => {
        ApiService.fetchUserByID(window.localStorage.getItem('id'))
        .then(res => {
            let user = res.data
            this.setState({
                id: user.id,
                userName: user.userName,
                password: user.password,
                firstName: user.firstName,
                lastName: user.lastName,
                gender:user.gender,
                salary:user.salary
            })
        })
        .catch(err => {
            console.error("loadUser() error", err)
            alert('유저 조회 실패!!!')
        })
    }
    
    onChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    saveUser = (e) => {
        e.preventDefault()
        let user = {
            id : this.state.id,
            userName: this.state.userName,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            gender: this.state.gender,
            salary: this.state.salary
        }
        ApiService.editUser(user)
        .then(res =>{
            this.setState({message:'유저 수정 성공!!!'})
            console.info(this.state.message)
            this.props.history.push('/users')
        })
        .catch(err => {
            console.error("saveUser() error", err)
            alert('유저 수정 실패!!!')
        })
    }
    
    render(){
        return(
            <div>
                <Typography variant='h6' style={style}>사용자 수정</Typography>
                <form method='post'>
                    <TextField style={style} type='text' id='userName' name='userName' label='사용자이름' margin='none' fullWidth value={this.state.userName}  />
                    <TextField style={style} type='password' id='password' name='password' label='패스워드' margin='none' fullWidth value={this.state.password} onChange={this.onChange} />
                    <TextField style={style} type='text' id='firstName' name='firstName' label='이름' margin='none' fullWidth value={this.state.firstName} onChange={this.onChange} />
                    <TextField style={style} type='text' id='lastName' name='lastName' label='성' margin='none' fullWidth value={this.state.lastName} onChange={this.onChange} />
                    
                    <FormControl fullWidth>
                        <InputLabel id='gender-label'>성별</InputLabel>
                        <NativeSelect style={style}  id='gender' name='gender' value={this.state.gender} onChange={this.onChange}>
                            <option value='' disabled>-- 선택 --</option>
                            <option value={'M'}>남자</option>
                            <option value={'F'}>여자</option>
                        </NativeSelect>
                    </FormControl>
                    
                    <TextField style={style} type='text' id='salary' name='salary' label='급여' margin='none' fullWidth value={this.state.salary} onChange={this.onChange} />
                    <div style={buttonStyle}>
                        <Button variant='contained' color='primary' onClick={this.saveUser} >저장</Button>
                    </div>
                </form>
            </div>
        )
    }
}
const style = {
    display:'flex',
    justifyContent:'center',
    marginTop:'40px'
}
const buttonStyle={
    marginTop:'40px',
    textAlign:'right'
}
export default EditUser