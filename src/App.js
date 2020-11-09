import React,{Component} from 'react'
import './App.css';
import UserList from './user/UserList'
class App extends Component {
  render (){
    return (
      <div className="App">
        <div className='container'>
          <UserList></UserList>
        </div>
      </div>
    );
  }
}
export default App;
