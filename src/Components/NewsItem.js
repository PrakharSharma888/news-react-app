import React, { Component } from 'react'
import image from '../Assests/news.jpg'


export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, url} = this.props
    return (
        <>
       
        <div className="card" style={{width: "18rem", border: '2px solid white'}}>
            <img id='img' src={!imageUrl?image:imageUrl} height="170px" className="card-img-top" alt='news'/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} rel="noreferrer" target="_blank" className="btn btn-success">Read More</a>
            </div>
        </div>
        </>
    )
  }
}

export default NewsItem
