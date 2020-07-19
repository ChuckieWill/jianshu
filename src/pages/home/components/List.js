import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ListItem, LoadMore} from '../style';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
 
class Home extends Component {
  render(){
    const { list, page, getMoreList } = this.props
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <Link key={index} to={'/detail/' + item.id}>
                <ListItem >
                  <img className="list-img" 
                      alt="list-img"
                      src={item.imgUrl}></img>
                  <div className="list-info">
                    <h3 className="title">{item.title}</h3>
                    <p className="content">{item.content}</p>
                  </div>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(page+1)}>阅读更多</LoadMore>
        
      </div>  
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.get('home').get('articleList').toJS(),
    page: state.getIn(['home', 'articlePage'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList(page) {
      dispatch(actionCreators.getMoreList(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

