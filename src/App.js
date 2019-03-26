import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import ListOfUsers from './ListOfUsers'
import Navbar from './Navbar'

class App extends Component {
  constructor() {
    super()
    this.state = {
      page: 0
    }
    this.decrementPage = this.decrementPage.bind(this)
    this.incrementPage = this.incrementPage.bind(this)
    this.setPageNumber = this.setPageNumber.bind(this)
  }

  decrementPage(event, history) {
    event.preventDefault()
    return this.setState(
      curState => {
        return { page: curState.page - 1 }
      },
      () => history.push(`/${this.state.page}`)
    )
  }

  incrementPage(event, history) {
    event.preventDefault()
    return this.setState(
      curState => {
        return { ...curState, page: curState.page + 1 }
      },
      () => {
        console.log('in callback')
        return history.push(`/${this.state.page}`)
      }
    )
  }

  setPageNumber(number, event, history) {
    event.preventDefault()
    return this.setState({ page: number }, () =>
      history.push(`/${this.state.page}`)
    )
  }

  componentDidMount() {
    this.setState({ page: Number(window.location.hash.slice(2)) })
  }

  render() {
    console.log('state in app', this.state)
    const { page } = this.state
    const { incrementPage, decrementPage, setPageNumber } = this
    return (
      <HashRouter>
        <div>
          <h1>Users</h1>
          <h6>{`You are viewing page ${this.state.page} out of 162`}</h6>
          <Route
            render={({ history }) => (
              <Navbar
                incrementPage={incrementPage}
                decrementPage={decrementPage}
                setPageNumber={setPageNumber}
                pageNumber={page}
                history={history}
              />
            )}
          />
          <Switch>
            <Route
              path="/:id"
              render={({ match }) => (
                <ListOfUsers page={Number(match.params.id)} />
              )}
            />
            <Redirect to="/1" />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}

export default App
