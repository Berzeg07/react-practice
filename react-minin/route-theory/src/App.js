import React, { Component } from 'react'
import './App.scss'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'
import CarDetail from './CarDetail/CarDetail'

class App extends Component {
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName={'wfm-active'}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={{
                color: 'blue'
              }}>About</NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname: '/cars',
                search: '?a=1&b=2',
                hash: 'wfm-hash'
              }}>Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr />

        {/*localhost:3000*/}
        <Switch>
          <Route path="/" exact render={() => <h1>Home Page</h1>} />
          {this.state.isLoggedIn ? <Route path="/about" component={About} />}
          <Route path="/about" component={About} />
          <Route path="/cars" exact component={Cars} />
          <Route path="/cars/:name" exact component={CarDetail} />
          <Redirect to={'/cars'} />
          {/* <Route exact render={() => <h1 style={{ color: 'red', textAlign: 'center' }}>Ошибка 400</h1>} /> */}
        </Switch>

        {/* <About />

        <Cars /> */}
      </div>
    );
  }
}

export default App
