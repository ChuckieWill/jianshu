import Axios from 'axios';
import { CHANGE_DETAIL_DATA } from './actionTypes';

const setDetailData = (data) => ({
  type: CHANGE_DETAIL_DATA,
  data
})

export const getDetail = (id) => {
  return (dispatch) => {
    Axios.get('/api/detail.json?id='+ id).then((res) => {
      const data = res.data.data
      dispatch(setDetailData(data))
    })
  }
}