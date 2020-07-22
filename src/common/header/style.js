import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position: relative; 
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  padding: 0 111px;
`

export const Logo = styled.div`
  position: absolute;
  top:0;
  left: 20px;
  display: block;
  height: 56px;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 945px;
  height: 100%;
  margin: 0 auto;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
  .icona{
    font-size: 21px;
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom{
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      color: #fff;
      background: #888;
    }
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 20px;
  top: 58px;
  width: 260px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  background: #fff;
`

export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;

export const SearchInfoSwitch = styled.span`
	float: right;
	font-size: 13px;
	cursor: pointer;
	.spin {
		display: block;
		float: left;
		font-size: 12px;
		margin-right: 2px;
		transition: all .2s ease-in;
		transform-origin: center center;
	}
`;

export const SearchInfoList = styled.div`
	overflow: hidden;
`;

export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 15px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
`;

export const NavSearch = styled.input.attrs({
  placeholder:"搜索"
})`
  width: 240px;
  height: 38px;
  padding: 0 38px 0 20px;
  box-sizing: border-box;
  margin-top: 10px;
  margin-left: 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder{
    color: #999;
  }
  &.focused {
    width: 300px;
  }
  &.slide-enter{
    transition: all .3s ease-out;
  }
  &.slide-enter-active{
    width: 300px;
  }
  &.slide-exit{
    transition: all .3s ease-out;
  }
  &.slide-exit-active{
    width: 240px;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 20px;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float:right;
  margin-top: 10px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  padding: 0 20px;
  margin-right: 20px;
  font-size: 14px;
  &.reg{
    color: #ec6149;
  }
  &.write{
    color: #fff;
    background: #ec6249;
  }
`