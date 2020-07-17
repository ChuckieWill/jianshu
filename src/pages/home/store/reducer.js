import {CHANGE_HOMEDATA, LOAD_MORE_ARTICLE, CHANGE_SHOWBACK} from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommenList:[],
  writerList: [],
  articlePage: 0,
  backTopShow: false
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
  if (action.type === LOAD_MORE_ARTICLE){
    return state.merge({
      articleList: state.get('articleList').concat(fromJS(action.list)),
      articlePage: action.page
    })
  }
  if (action.type === CHANGE_SHOWBACK) {
    return state.set('backTopShow', action.flag)
  }
  return state;
}