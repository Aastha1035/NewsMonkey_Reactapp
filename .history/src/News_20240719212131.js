import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
    <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className='row'>
            <div className="col-md-4">
               <NewsItem title="mytitle" description="mydesc" imageurl="https://images.macrumors.com/t/V-BW71L5EjFdoafu8GjXL9Hxh0U=/1920x/article-new/2023/08/bsod-16-9.jpg"/>
            </div>
            <div className="col-md-4">
               <NewsItem title="mytitle" description="mydesc"/>
            </div>
            <div className="col-md-4">
               <NewsItem title="mytitle" description="mydesc"/>
            </div>
        </div>
    </div>
    )
  }
}

export default News
