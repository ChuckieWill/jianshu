import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo,
         SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem} from './style'
import { connect } from 'react-redux'
import { actionCreators }  from './store'


class  Header  extends Component {
  // constructor(props) {
  //   super(props)
  //   this.props.onInoutFocus(this.props.list)
  // }
  render() {
    const {focused, mouseIn, list, onInoutFocus, onInputBlur} = this.props
    return (
      <div >
        <HeaderWrapper>
          <Logo  href='/'/>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <NavItem className="right">
              <i className="iconfont icona">&#xe636;</i>
            </NavItem>
            <NavItem className="right">登录</NavItem>
            <SearchWrapper>
              <CSSTransition
                in = {focused || mouseIn}
                timeout = {3000}
                classNames = 'slide'>
                <NavSearch 
                  className={(focused || mouseIn) ? 'focused' : ''}
                  onFocus = {() => onInoutFocus(list)}
                  onBlur = {onInputBlur}></NavSearch>
              </CSSTransition>
              <i className={(focused || mouseIn) ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe614;</i>
              { this.getSearchInfo(focused)}
            </SearchWrapper>
          </Nav>
          <Addition>
            <Button className="write">
              <i className="iconfont ">&#xe708;</i>
              写文章
              </Button>
            <Button className="reg">注册</Button>
          </Addition>
        </HeaderWrapper>

      </div>
    )
  }

  getSearchInfo(){
    const  {focused, list, page, totalPage, mouseIn, onMouseEnter, onMouseLeave, onChangeHot} = this.props
    const jsList = list.toJS()
    const pageList = []
    if (jsList.length) {
      for (let index = (page -1) * 10; index < page * 10 ; index++) {
        if (jsList[index] === undefined) break
        pageList.push(
          <SearchInfoItem key = {jsList[index]}>{jsList[index]}</SearchInfoItem>
        )
      }
    }
    if(focused || mouseIn){
      return (
        <SearchInfo onMouseEnter = {onMouseEnter} onMouseLeave = {onMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => onChangeHot(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            { pageList }
          </SearchInfoList>
        </SearchInfo>
      )
    }else{
      return null;
    }
   
  }


}

const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    list : state.get('header').get('list'),
    page: state.get('header').get('page'),
    mouseIn: state.get('header').get('mouseIn'),
    totalPage: state.get('header').get('totalPage')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInoutFocus(list){
      list.size === 0 && dispatch(actionCreators.getHotSearch())
      const action = actionCreators.getSearchFucued()
      dispatch(action)
    },
    
    onInputBlur() {
      const action = actionCreators.getSearchBlur()
      dispatch(action)
    },

    onMouseEnter() {
      dispatch(actionCreators.getSearchEnter())
    },

    onMouseLeave() {
      dispatch(actionCreators.getSearchLeave())
    },

    onChangeHot(page, totalPage, spin) {
      let orginAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (orginAngle){
        orginAngle = parseInt(orginAngle, 10 )
      }else{
        orginAngle = 0
      }
      spin.style.transform = 'rotate('+(orginAngle + 360)+'deg)'
      if(page < totalPage){
        dispatch(actionCreators.getChangeHot(page + 1))
      }else{
        dispatch(actionCreators.getChangeHot(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
