import React, { Component } from 'react';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail'
import {Globalstyle} from './style';
import {GlobalIconfont} from './statics/iconfont/iconfont';
import {Provider} from 'react-redux'; //导入react-redux
import store from './store';   //导入store
import { BrowserRouter, Route } from 'react-router-dom';


class  App  extends Component {
  render() {
    return (
      <div >
        <Globalstyle/>
        <GlobalIconfont/>
        <Provider store = {store}>  
          <BrowserRouter>
            <Header/> 
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
          </BrowserRouter>          
        </Provider>   
      </div>
    )
  }
  
}

export default App;
