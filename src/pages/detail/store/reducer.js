import {} from './actionTypes';
import {fromJS} from 'immutable';
import {CHANGE_DETAIL_DATA} from './actionTypes'

const defaultState = fromJS({
  data: {
    title: '',
    imgUrl: '',
    content: []
  }
})

export default (state = defaultState, action) => {
  if(action.type === CHANGE_DETAIL_DATA){
    return state.set('data', fromJS(action.data))
  }  
  return state;
}