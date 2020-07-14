import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommen from './components/Recommen';
import Writer from './components/Writer';
import { actionCreators } from './store';
import { connect } from 'react-redux';



import { HomeWrapper, HomeRight, HomeLeft } from './style';
 
class Home extends Component {
  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' alt="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4989/7aee9b231d11e9ba92248e65e8f407343f87376e.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommen/>
          <Writer/>
        </HomeRight>
      </HomeWrapper>
    )
  }

  componentDidMount(){
    this.props.getHomeData()
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    getHomeData() {
      dispatch(actionCreators.getHomeData())
    }
  }
}

export default connect(null, mapDispatchToProps)(Home);
