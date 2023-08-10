import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './page/home/Home';
import Login from './page/login/Login';
import Register from './page/register/Register';
import Profile from './page/profile/Profile';
import Messenger from './page/messenger/Messenger';


function App() {
  const { user } = true;
  return (
   
      <Router>
        <Switch>
          <Route exact path='/'>
            {user ? <Home /> : <Register />}
          </Route>
          <Route path='/login'>
          {user ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path='/register'>
          {user ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/messenger">
            <Messenger />
          
        </Route>
          <Route path="/profile/:username">
          <Profile />
        </Route>
        </Switch>
        
      </Router>
     
    
  );
}

export default App;
