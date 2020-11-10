import React, {Component} from 'react'
import ApiService from '../ApiService'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import NativeSelect from '@material-ui/core/NativeSelect'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'

class AddUser extends Component{
    constructor(props){
        super(props)

        this.state={
            userName: '',
            password: '',
            firstName: '',
            lastName: '',
            gender:'',
            salary:'',
            message:null
        }
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return(
            <div>
                <Typography variant='h6' style={style}>사용자 추가</Typography>
                <form method='post'>
                    <TextField style={style} type='text' id='userName' name='userName' label='사용자이름' margin='none' fullWidth value={this.state.userName} onChange={this.onChange} />
                    <TextField style={style} type='password' id='password' name='password' label='패스워드' margin='none' fullWidth value={this.state.password} onChange={this.onChange} />
                    <TextField style={style} type='text' id='firstName' name='firstName' label='이름' margin='none' fullWidth value={this.state.firstName} onChange={this.onChange} />
                    <TextField style={style} type='text' id='lastName' name='lastName' label='성' margin='none' fullWidth value={this.state.lastName} onChange={this.onChange} />
                   
                    <NativeSelect style={style}  id='gender' name='gender' label='성별' value={this.state.gender} onChange={this.onChange} fullWidth>
                        <option value='' disabled>-- 선택 --</option>
                        <option value={'M'}>남자</option>
                        <option value={'F'}>여자</option>
                        </NativeSelect>
                    
                    <TextField style={style} type='text' id='salary' name='salary' label='급여' margin='none' fullWidth value={this.state.salary} onChange={this.onChange} />
                    <div style={buttonStyle}>
                        <Button variant='contained' color='primary' onClick >저장</Button>
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
export default AddUser