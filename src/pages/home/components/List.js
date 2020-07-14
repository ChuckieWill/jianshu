import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ListItem} from '../style';
 
class Home extends Component {
  render(){
    const { list } = this.props
    return (
      <div>
        {
          list.map((item) => {
            return (
              <ListItem key={item.id}>
                <img className="list-img" 
                    alt="list-img"
                    src={item.imgUrl}></img>
                <div className="list-info">
                  <h3 className="title">{item.title}</h3>
                  <p className="content">{item.content}</p>
                </div>
              </ListItem>
            )
          })
        }
        
      </div>  
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.get('home').get('articleList').toJS()
  }
}

export default connect(mapStateToProps, null)(Home);

