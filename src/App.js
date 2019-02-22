import React, { Component } from 'react';
import { BrowserRouter , Switch , Route} from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import ProjectDetails from './Components/Project/ProjectDetails';
import SignIn from './Components/Auth/SignIn'
import SignUp from './Components/Auth/SignUp'
import CreateProject from './Components/Project/CreateProject'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          <Route path="/project/:id" component={ProjectDetails}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/create" component={CreateProject}/>

        </Switch>
    
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
