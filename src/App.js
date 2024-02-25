import {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'

import Create from './components/Create'

import Home from './components/Home'

import DataContext from './context/DataContext'

import NotFound from './components/NotFound'

class App extends Component {
  state = {
    Data: {},
  }

  UpdateData = x => {
    this.setState({Data: x})
  }

  render() {
    const {Data} = this.state

    return (
      <DataContext.Provider
        value={{
          Data,
          UpdateData: this.UpdateData,
        }}
      >
        <Switch>
          <Route exact path="/" component={Create} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </DataContext.Provider>
    )
  }
}

export default App
