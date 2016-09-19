import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/fetchUsers'

class UsersList extends Component {
  componentWillMount() {
    this.props.fetchUsers()
  }
  renderUser(user) {
    return (
      <div className='card card-block'>
        <h4 className='card-title'>{ user.name }</h4>
        <p className='card-text'>{ user.company.name }</p>
        <a className='btn btn-primary' href={user.website} target='_blank' rel='noopener noreferrer'>WebSite</a>
      </div>
    )
  }
  render() {
    return (
      <div className='user-list'>
        { this.props.users.map(this.renderUser) }
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({
  users
})

export default connect(mapStateToProps, { fetchUsers })(UsersList)
