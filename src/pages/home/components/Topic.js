import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrappper, TopicItem } from '../style';

 
class Topic extends Component {
  render(){
    const {list} = this.props
    return (
      <TopicWrappper>
        {
          list.map((item) => {
            return (
              <TopicItem key={item.id}>
                <img className='topic-img' alt='topic-img' src={item.imgUrl}/>
                {item.title}
              </TopicItem>
            )
          })
        }
      </TopicWrappper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.get('home').get('topicList').toJS()
  }
}


export default connect(mapStateToProps, null)(Topic);
