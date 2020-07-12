import {SEARCH_FOCUSED, SEARCH_BLUR, LIST_CHANGE, SEARCH_ENTER, SEARCH_LEAVE, CHANGE_HOT} from './actionTypes'
import Axios from 'axios'
import { fromJS } from 'immutable'

const getListChange = (list) => ({
  type: LIST_CHANGE,
  list: fromJS(list),
  totalPage: Math.ceil(list.length / 10)
})

export const getSearchFucued = () => ({
  type: SEARCH_FOCUSED
})

export const getSearchBlur = () => ({
  type: SEARCH_BLUR
})

export const getSearchEnter = () => ({
  type: SEARCH_ENTER
})

export const getSearchLeave = () => ({
  type: SEARCH_LEAVE
})

export const getChangeHot =(page) => ({
  type: CHANGE_HOT,
  page
})

export const getHotSearch = () => {
  return (dispatch) => {
    Axios.get('/api/headerList.json').then((res) => {
      // console.log(res.data.data)
      dispatch(getListChange(res.data.data))
    }).catch((err) => {
      console.log(err)
    })
  }
}