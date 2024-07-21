import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description} = this.props;
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src="https://images.macrumors.com/t/bhlDYnOwwEVE2EZf4577Kr6OZCc=/2500x/article-new/2024/07/iPhone-SE-4-Vertical-Camera-Feature.jpg" alt="Card image cap"/>
          <div className="card-body">
             <h5 className="card-title">{title}</h5>
             <p className="card-text">{ description }</p>
             <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
    )
  }
}

export default NewsItem
