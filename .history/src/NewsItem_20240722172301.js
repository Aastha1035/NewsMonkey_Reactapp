import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageurl,newsurl,author,date} = this.props;
    return (
      <div className='container my-3'>
        <h2></h2>
        <div className="card" >
          <img src={imageurl}
          className="card-img-top" 
          alt=""/>
          <div className="card-body">
             <h5 className="card-title">{title}</h5>
             <p className="card-text">{ description }</p>
             <p className="card-text"><small className='text-muted'>By {!author?"Unknown":author} on {new Date {date}.toGMTString()}</small></p>
             <a rel="noreferrer" href={newsurl}  target="blank"className="btn btn-primary">Read more</a>
            </div>
        </div>
    </div>
    )
  }
}

export default NewsItem
