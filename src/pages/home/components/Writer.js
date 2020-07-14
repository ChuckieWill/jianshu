import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, WriterItem} from '../style';

class Writer extends Component {
  render(){
    const { list } = this.props
    return (
      <WriterWrapper>
        <div className="writer">推荐作者</div>
        <div className="change">
          <i className="iconfont spin">&#xe851;</i>
          换一批
        </div>
        {
          list.map((item) => {
            return (
              <WriterItem key={item.id}>
                <div className="writer-cont">
                  <img className="writer-img" alt="writer-img"
                      src={item.imgUrl}></img>
                  <div className="writer-info">
                    <div className="title">{item.title}</div>
                    <div className="content">{item.content}</div>
                  </div>
                </div>
                <div className="watch-info">
                  <span className="watch-span">+</span>
                  <div className="watch">关注</div>
                </div>
              </WriterItem>
            )
          })
        }
      </WriterWrapper>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    list: state.get('home').get('writerList').toJS()
  }
}



export default connect(mapStateToProps, null)(Writer);