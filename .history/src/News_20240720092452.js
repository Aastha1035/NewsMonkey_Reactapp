import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
   constructor(){
      super();
      console.log("Hello I am a constructor fromnews component");
      this.state={
         articles: [],
         page: 1
         
      }
   }
   async componentDidMount(){
      let url="https://newsapi.org/v2/everything?q=tesla&from=2024-06-19&sortBy=publishedAt&apiKey=f0f3bf5d2db44fd583713070908f27e9";
      let data = await fetch(url);
      let parseData = await data.json()
      console.log(parseData);
      this.setState({articles: parseData.articles})
   }
   handlePrevClick = async ()=>{
      console.log("previ");
      let url=`https://newsapi.org/v2/everything?q=tesla&from=2024-06-19&sortBy=publishedAt&apiKey=f0f3bf5d2db44fd583713070908f27e9=${this.state.page-1}&pageSize=20`;
      let data = await fetch(url);
      let parseData = await data.json()
      console.log(parseData);
      this.setState({
         page: this.state.page-1,
         articles: parseData.articles});
   }
   handleNextClick = async ()=>{
      console.log("next");
      let url=`https://newsapi.org/v2/everything?q=tesla&from=2024-06-19&sortBy=publishedAt&apiKey=f0f3bf5d2db44fd583713070908f27e9=${this.state.page-1}&pageSize=20`;
      let data = await fetch(url);
      let parseData = await data.json()
      console.log(parseData);
      this.setState({
         page: this.state.page-1,
         articles: parseData.articles});
   }
  render() {
    return (
    <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className='row'>
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""}
              imageurl={element.urlToImage}
              newsurl={element.url}/>
          </div>
      
        })}    
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1}type="button" class="btn btn-success class=" onClick={this.handlePrevClick}>&larr; previous</button>
        <button type="button" class="btn btn-info" onClick={this.handleNextClick}>More Info &rarr;</button>
        </div>
    </div>
    )
  }
}

export default News
