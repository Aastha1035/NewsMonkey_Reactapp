import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, decription} = this.props;
    return (
      <div>
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="..." alt="Card image cap"/>
          <div class="card-body">
             <h5 class="card-title">{title}</h5>
             <p class="card-text">{description}</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
    )
  }
}

export default NewsItem
