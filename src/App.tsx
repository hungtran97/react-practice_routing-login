import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './Home'
import LoginPage from './Login'
import Toast from './Toast'
import './App.css';
import { ToastProps } from 'react-bootstrap';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      loggedIn: false,
      toast: {
        type: '',
        message: ''
      }
    }
    this.setToast = this.setToast.bind(this)
  }

  setToast(toast: ToastProps) {
    console.log(this.state)
    this.setState({
      ...this.state,
      toast
    })
  }
  render() {
    return (
      <div className="App">
        <Toast toast={this.state.toast} />
        <Router>
          <Switch>
            <Route path='/login'>
              <LoginPage setToast={this.setToast}/>
            </Route>
            <Route path='/'>
              <HomePage setToast={this.setToast}/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
