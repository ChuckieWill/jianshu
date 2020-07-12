import React, { Component } from 'react';
import Header from './common/header'
import {Globalstyle} from './style';
import {GlobalIconfont} from './statics/iconfont/iconfont'
import {Provider} from 'react-redux'; //导入react-redux
import store from './store'   //导入store

class  App  extends Component {
  render() {
    return (
      <div >
        <Globalstyle/>
        <GlobalIconfont/>
        <Provider store = {store}>  
          <Header/>            
        </Provider>   
      </div>
    )
  }
  
}

export default App;
