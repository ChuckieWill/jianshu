import {CHANGE_HOMEDATA} from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommenList:[],
  writerList: []
})

export default (state = defaultState, action) => {
  if(action.type === CHANGE_HOMEDATA){
    return state.merge({
      topicList: action.topicList,
      articleList: action.articleList,
      recommenList: action.recommenList,
      writerList: action.writerList
    })
  }
  return state;
}