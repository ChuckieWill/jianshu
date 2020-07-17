import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  width: 625px; 
  padding: 30px 0 0 15px;
  float: left;
  .banner-img{
    width: 625px;
    height: 270px;
  }
`

export const HomeRight = styled.div`
  width: 280px;
  margin-left: 40px;
  padding-top: 30px;
  float: right;
`

export const TopicWrappper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  margin: 0 0 18px 18px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-img{
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`

export const ListItem = styled.div`
  width: 100%;
  margin: 0 0 15px;
  overflow: hidden;
  padding: 20px 0 10px 0;
  border-bottom: 1px solid #dcdcdc;
  .list-img {
    margin: 10px 0 0 0 ;
    display: block;
    width: 150px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
  .list-info{
    width: 450px;
    float: left;
  }
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.content {
    padding: 5px 0 0 0 ;
		line-height: 24px;
		font-size: 13px;
    color: #999;
    display: -webkit-box;
    -webkit-box-orient: vertical;    
    -webkit-line-clamp: 2;           
    overflow: hidden;
    text-overflow: ellipsis;         
	}
`

export const RecommenWrapper = styled.div`
  width: 100%;
  margin: 0 0 30px 0;
`

export const RecommenItem = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 6px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`

export const WriterWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  margin: 60px 0 0 0;
  .writer{
    float: left;
    font-size: 14px;
    color: #969696;
  }
  .change{
    float: right;
    font-size: 14px;
    color: #969696;
  }
  .spin{
    font-size: 13px;
		margin-right: 2px;
  }
`

export const WriterItem = styled.div`
  overflow: hidden;
  width: 100%;
  height: 47px;
  padding: 15px 0 0 0;
  display: flex;
  justify-content: space-between;
  .writer-cont{
    display: flex;
  }
  .writer-img {
    heigth: 48px;
    width: 48px;
    border-radius: 50%;
  }
  .writer-info{
    margin: auto 8px;
    display: flex;
    flex-direction: column;
  }
  .title{
    line-height: 20px;
    font-size: 14px;
    color: #333;
  }
  .content{
    line-height: 18px;
    font-size: 12px;
    color: #969696;
  }
  .watch-info{
    display: flex;
    ling-height: 22px;
    font-size: 13px;
    color: #42c02e;
    margin: auto 0;
  }
  .watch-span{
    font-size: 22px;
    font-weight: 400;
  }
  .watch{
    margin-top: 5px;
  } 
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`

export const BackTop = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 100px;
  right: 100px;
  border: 1px solid #ccc;
  line-height: 50px;
  text-align: center;
`