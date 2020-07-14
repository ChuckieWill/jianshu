import {CHANGE_HOMEDATA} from './actionTypes'
import Axios from 'axios'
import { fromJS } from 'immutable'


const setHomeData = (data) => ({
  type: CHANGE_HOMEDATA,
  topicList: fromJS(data.topicList),
  articleList: fromJS(data.articleList),
  recommenList: fromJS(data.recommenList),
  writerList: fromJS(data.writerList)
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