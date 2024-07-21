import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
   articles = [{
   
      "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Tim Hardwick",
    "title": "Crowdstrike Says Global IT Outage Limited to Windows PCs, But Mac and Linux Hosts Not Affected",
    "description": "A widespread system failure is currently affecting numerous Windows devices globally, causing critical boot failures across various industries, including banks, rail networks, airlines, retail, broadcasters, and many more businesses. The issue, manifesting as…",
    "url": "https://www.macrumors.com/2024/07/19/global-it-outage-limited-to-windows-pcs/",
    "urlToImage": "https://images.macrumors.com/t/V-BW71L5EjFdoafu8GjXL9Hxh0U=/1920x/article-new/2023/08/bsod-16-9.jpg",
    "publishedAt": "2024-07-19T10:12:57Z",
    "content": "A widespread system failure is currently affecting numerous Windows devices globally, causing critical boot failures across various industries, including banks, rail networks, airlines, retail, broad… [+1779 chars]"
    },
   {
      "source": {
    "id": null,
    "name": "CNET"
    },
    "author": "Dreamchild Obari",
    "title": "Time's Running Out to Bag Apple AirPods Pro 2 for Just $169 as Prime Day Winds Down",
    "description": "Get your hands on the best wireless earbuds Apple makes while you can for Amazon's best price ever.",
    "url": "https://www.cnet.com/deals/times-running-out-to-bag-apple-airpods-pro-2-for-just-169-as-prime-day-winds-down/",
    "urlToImage": "https://www.cnet.com/a/img/resize/99ccfa6d417dfb025eadd955adf3a3d3f75f3638/hub/2024/07/10/e0231ee3-2230-4aac-b33a-21ec776f2b94/apple-airpods-pro-pd.png?auto=webp&fit=crop&height=675&width=1200",
    "publishedAt": "2024-07-19T14:11:20Z",
    "content": "The Prime Day deals have officially come to an end, but Amazon still has some stragglers just waiting for you to take advantage of them. As a result, there are still some Apple Prime Day deals to be … [+1785 chars]"
    },
   {
      "source": {
    "id": null,
    "name": "CNET"
    },
    "author": "Zachary McAuliffe",
    "title": "iOS 18 Beta: How to Lock and Hide Your Apps for Added Security",
    "description": "Don't let your kindergartener drop three grand on Amazon.",
    "url": "https://www.cnet.com/tech/services-and-software/ios-18-beta-how-to-lock-and-hide-your-apps-for-some-added-security/",
    "urlToImage": "https://www.cnet.com/a/img/resize/414b2fc71e412b9ac4045804aa22ad20b0694ab3/hub/2024/04/05/0b0b96f8-e760-4490-a97c-24779e68f96d/ios-18-iphone15-2b.jpg?auto=webp&fit=crop&height=675&width=1200",
    "publishedAt": "2024-07-19T11:00:04Z",
    "content": "Apple released the first public beta for iOS 18 on Monday, a little more than a month after the tech giant announced the software at its Worldwide Developers Conference in June. Apple said that the u… [+3665 chars]"
    },
   {
      "source": {
    "id": null,
    "name": "Hipertextual"
    },
    "author": "Quelian Sanz",
    "title": "El iPhone 15 está a precio de risa con 314 euros de descuento",
    "description": "Tras una semana intensa de ofertas y descuentos parece que AliExpress no se ha cansado de tirar los precios. La tienda está ultimando el stock de algunos productos de Apple y ofreciendo chollos en casi todas las categorías. Nos hemos dado una vuelta por su ap…",
    "url": "http://hipertextual.com/2024/07/el-iphone-15-esta-a-precio-de-risa-con-314-euros-de-descuento",
    "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2023/09/iPhone-15-7-scaled.jpg",
    "publishedAt": "2024-07-19T12:17:58Z",
    "content": "Tras una semana intensa de ofertas y descuentos parece que AliExpress no se ha cansado de tirar los precios. La tienda está ultimando el stock de algunos productos de Apple y ofreciendo chollos en ca… [+2136 chars]"
    }
   ]
   constructor(){
      super();
      console.log("Hello I am a constructor fromnews component");
      this.state={
         articles: this.articles
         
      }
   }
  render() {
    return (
    <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className='row'>
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)}
              imageurl={element.urlToImage}
              newsurl="todo"/>
          </div>
      
        })}
            
        </div>
    </div>
    )
  }
}

export default News
