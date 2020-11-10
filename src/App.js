import React,{Component} from 'react'
import './App.css';
import Router from './route/Router'
import Navbar from './route/NavBar'

import Container from '@material-ui/core/Container'

class App extends Component {
  render (){
    return (
      <div className="App">
        <Navbar />
        <Container>
          <Router></Router>
        </Container>
      </div>
    );
  }
}
export default App;
