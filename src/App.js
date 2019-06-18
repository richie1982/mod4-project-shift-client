import React from 'react';
import { Route, Switch, withRouter} from 'react-router-dom'
import LogIn from './components/LogIn'
import { handleLogin, validate } from './services/api'
import HomePage from './pages/HomePage'
import Landing from './components/Landing'
import SearchResults from './pages/SearchResults'
import SignUpForm from './components/SignUpForm'

export class App extends React.Component {

  state = {
    user: ''
  }

  signIn = (user) => {
    this.setState({ user: user.name })
    localStorage.setItem('token', user.token)
    this.props.history.push('/landing')
  }

  signUp = (user) => {
    this.setState({ user: user.name })
    localStorage.setItem('token', user.token )
    this.props.history.push('./landing')
  }

  signOut = () => {
    this.setState({ user: '' })
    localStorage.removeItem('token')
  }

  componentDidMount () {
    
    if (localStorage.token) {
      validate()
        .then(data => {
          if (data.error) {
            alert(data.error)
          } else {
            this.signIn(data)
          }
        })
    }
  } 

  render() {

    return (
    
      <div className="App">
  
      <Switch>
        <Route exact path='/' component={props => <HomePage user={this.state.user} {...props}/>}/>
        <Route path='/sign_up' component={props => <SignUpForm {...props} signUp={this.signUp}/>}/>
        <Route path='/log_in' component={props => <LogIn signIn={this.signIn} handleLogin={handleLogin} {...props}/>}/>
        <Route path= '/landing' component={props => <Landing user={this.state.user} signOut={this.signOut} {...props}/>}/>
      </Switch>
        
      </div>
    );
  }
}

export default withRouter(App);
