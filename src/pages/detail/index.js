import React, { Component } from 'react';
import { DetailWrapper } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store'

class Detail extends Component {
  render(){
    const {title, imgUrl, list } = this.props
    return (
      <DetailWrapper>
        <div className='container'>
          <div className='title'>{title}</div>
          <div className='img-wrap'>
            <img alt='img-wrap' src={imgUrl}></img>
          </div>
          {
            list.map((item, index) => {
              return (
                <p className='content' key={index}>{item}</p>
              )
            })
          }
        </div>
      </DetailWrapper>
    )
  }
  componentDidMount(){
    this.props.getDetail(this.props.match.params.id)

  }

}

const mapStateToProps = (state) => {
  const detail = state.get('detail').get('data')
  return {
    title: detail.get('title'),
    imgUrl: detail.get('imgUrl'),
    list: detail.get('content').toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail(id){
      dispatch(actionCreators.getDetail(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);