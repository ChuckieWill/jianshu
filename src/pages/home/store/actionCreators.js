import {CHANGE_HOMEDATA, LOAD_MORE_ARTICLE, CHANGE_SHOWBACK} from './actionTypes'
import Axios from 'axios'
import { fromJS } from 'immutable'


const setHomeData = (data) => ({
  type: CHANGE_HOMEDATA,
  topicList: fromJS(data.topicList),
  articleList: fromJS(data.articleList),
  recommenList: fromJS(data.recommenList),
  writerList: fromJS(data.writerList)
})

const setArticleList = (list, page) => ({
  type: LOAD_MORE_ARTICLE,
  list,
  page
})

export const getChangeShow = (flag) => ({
  type: CHANGE_SHOWBACK,
  flag
})



export const getHomeData = () => {
  return (dispatch) => {
    Axios.get('/api/homeData.json').then((res) => {
      const data = res.data.data
      dispatch(setHomeData(data))
    }).catch((err) => {
      console.log(err)
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    Axios.get('/api/homeList.json?page=' + page).then((res) => {
      const list = res.data.data
      dispatch(setArticleList(list, page))
    }).catch((err) => {
      console.log(err)
    })
  }
}