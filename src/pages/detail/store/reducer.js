import {} from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  title: ''
})

export default (state = defaultState, action) => {
  
  return state;
}