import {SEARCH_FOCUSED, SEARCH_BLUR, LIST_CHANGE, SEARCH_ENTER, SEARCH_LEAVE, CHANGE_HOT} from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {
  if (action.type === SEARCH_FOCUSED){
    return state.set('focused', true)
  }
  if (action.type === SEARCH_BLUR){
    return state.set('focused', false)
  }
  if (action.type === LIST_CHANGE){
    return state.merge({
      list: action.list,
      totalPage: action.totalPage
    })
  }
  if (action.type === SEARCH_ENTER){
    return state.set('mouseIn', true)
  }
  if (action.type === SEARCH_LEAVE) {
    return state.set('mouseIn', false)
  }
  if (action.type === CHANGE_HOT){
    return state.set('page', action.page)
  }
  return state;
}