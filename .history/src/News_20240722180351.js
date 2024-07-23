import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {
   static defaultProps={
      country: 'in',
      pageSize: 8,
      //category: 'general',
      
   }
   static propTypes={
     country:  PropTypes.string,
     pageSize: PropTypes.number,
     category: PropTypes.string,

   }
   constructor(){
      super();
      console.log("Hello I am a constructor fromnews component");
      this.state={
         articles: [],
         page: 1
         
      }
   }
   async updateNews(){
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f0f3bf5d2db44fd583713070908f27e9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parseData = await data.json()
      console.log(parseData);
      this.setState({articles: parseData.articles, totalArticles : parseData.totalResults})
   }
   async componentDidMount(){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f0f3bf5d2db44fd583713070908f27e9&page=1&pagesize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parseData = await data.json()
      console.log(parseData);
      this.setState({articles: parseData.articles, totalArticles : parseData.totalResults})
   }
   handlePrevClick = async ()=>{
      this.setState({page: this.state.page-1});
      this.updateNews();
   }
   handleNextClick = async ()=>{
      this.setState({page: this.state.page+1});
      this.updateNews();
   }
  render() {
    return (
    <div className='container my-3'>
      <h2 className='text-center'>NewsMonkey - Top Headlines</h2>
         <div className='row'>
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?element.title:""} description={element.description?element.description:""}
              imageurl={element.urlToImage}
              newsurl={element.url}
              author={element.author} date={element.publishedAt}
              source={element.source.name}/>
          </div>
      
        })}    
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1}type="button" class="btn btn-success class=" onClick={this.handlePrevClick}>&larr; previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResult/this.props.pageSize)} type="button" class="btn btn-info" onClick={this.handleNextClick}>More Info &rarr;</button>
        </div>
    </div>
    )
  }
}

export default News
