import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageurl,newsurl} = this.props;
    return (
      <div className='container my-3'>
        <h2></h2>
        <div className="card" style={{width: "18rem"}}>
          <img src=""/*{imageurl?"https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_60f15fa2-6fb2-4957-90ea-19b80b873260":imageurl}*/
          className="card-img-top" 
          alt="..."/>
          <div className="card-body">
             <h5 className="card-title">{title}</h5>
             <p className="card-text">{ description }</p>
             <a href={newsurl}  target="blank"className="btn btn-primary">Read more</a>
            </div>
        </div>
    </div>
    )
  }
}

export default NewsItem
