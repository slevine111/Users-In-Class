import React, { Component } from 'react'
import axios from 'axios'

class ListOfUsers extends Component {
  constructor() {
    console.log('in listofusers constructor')
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    console.log('in didmount')
    return axios
      .get(
        `https://acme-users-api.herokuapp.com/api/users/${this.props.page - 1}`
      )
      .then(({ data }) => this.setState({ users: data.users }))
      .catch(err => console.error(err))
  }

  componentDidUpdate(prevProps) {
    console.log('in componentDidUpdate')
    console.log(this.props.page)
    if (prevProps.page !== this.props.page) {
      console.log('inside IF statement')
      return axios
        .get(
          `https://acme-users-api.herokuapp.com/api/users/${this.props.page -
            1}`
        )
        .then(({ data }) => this.setState({ users: data.users }))
        .catch(err => console.error(err))
    }
  }

  render() {
    console.log('in list of users render', this.state.users)
    console.log(this.props)
    return (
      <table className="table">
        <thead>
          <tr>
            <th>First</th>
            <th>Middle</th>
            <th>Last</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map(user => {
            const { id, firstName, middleName, lastName, email } = user
            return (
              <tr key={id}>
                <td>{firstName}</td>
                <td>{middleName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default ListOfUsers
