import { FETCH_USERS } from './types'
import axios from 'axios'

export const fetchUsers = () => {
  const request = axios.get('https://jsonplaceholder.typicode.com/users')
  return {
    type: FETCH_USERS,
    data: request
  }
}
