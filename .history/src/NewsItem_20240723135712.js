import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageurl,newsurl,author,date,source} = this.props;
    return (
      <div className='container my-3'>
        <div className="card">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}
        </span>
        <img src={!imageurl?"https://www.cnet.com/a/img/resize/414b2fc71e412b9ac4045804aa22ad20b0694ab3/hub/2024/04/05/0b0b96f8-e760-4490-a97c-24779e68f96d/ios-18-iphone15-2b.jpg?auto=webp&fit=crop&height=675&width=1200":imageurl}
          className="card-img-top" 
          alt="..."/>
          <div className="card-body">
             <h5 className="card-title">{title}</h5>
             <p className="card-text">{ description }</p>
             <p className="card-text"><small className='text-muted'>By {!author?"Unknown":author} on {new Date (date).toGMTString()}</small></p>
             <a rel="noreferrer" href={newsurl}  target="blank"className="btn btn-primary">Read more</a>
            </div>
        </div>
    </div>
    )
  }
}

export default NewsItem
