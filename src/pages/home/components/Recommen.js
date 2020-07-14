import React, { Component } from 'react';
import { RecommenWrapper , RecommenItem} from '../style'
import { connect } from 'react-redux';

 
class Recommen extends Component {
  render(){
    const {list} = this.props
    return (
      <RecommenWrapper>
        {
          list.map((item) => {
            return (
              <RecommenItem key={item.id} imgUrl={item.imgUrl}></RecommenItem>
            )
          })
        }
        
      </RecommenWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.get('home').get('recommenList').toJS()
  }
}



export default connect(mapStateToProps, null)(Recommen);
