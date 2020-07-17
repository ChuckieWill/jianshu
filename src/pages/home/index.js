import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommen from './components/Recommen';
import Writer from './components/Writer';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import { UpOutlined } from '@ant-design/icons';
import { BackTop, HomeWrapper, HomeRight, HomeLeft } from './style';
 
class Home extends Component {
  render(){
    const {show} = this.props
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
        {
           show ?  <BackTop onClick={this.onBackTop}><UpOutlined /></BackTop> : null
        }
        
      </HomeWrapper>
    )
  }

  componentDidMount(){
    this.props.getHomeData()
    this.bindEvents()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.onChangeShow)
  }

  onBackTop() {
    window.scrollTo(0, 0)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.onChangeShow)
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.get('home').get('backTopShow')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHomeData() {
      dispatch(actionCreators.getHomeData())
    },

    onChangeShow() {
      const scrollY = document.documentElement.scrollTop
      if (scrollY > 400) {
        dispatch(actionCreators.getChangeShow(true))
      }else{
        dispatch(actionCreators.getChangeShow(false))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
