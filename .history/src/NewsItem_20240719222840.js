import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageurl} = this.props;
    return (
      <div className='container my-3'>
        <h2></h2>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageurl}
          className="card-img-top" 
          alt=""/>
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
