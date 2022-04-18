import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Preloader from './Preloader'

export class NewsComp extends Component {

    constructor(){
        super()
        this.state = {
            articles : [],
            loading : false,
            page : 1
        }
    }

    

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=8de3e24b65aa4c08967682c5bcfe81de&pageSize=9";
        this.setState({loading: true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({loading: true})
        this.setState({articles : parsedData.articles, total : parsedData.totalResults, loading: false})
        let leftArticle = this.state.total / 9;
        console.log(leftArticle)
    }

    prevPage = async ()=>{
        
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8de3e24b65aa4c08967682c5bcfe81de&page=${this.state.page - 1}&pageSize=9`
        this.setState({loading: true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page : this.state.page - 1,
            articles : parsedData.articles,
            total : parsedData.totalResults,
            loading : false
        })
        
    }

    nextPage = async ()=>{
        if( this.state.page + 1 > Math.ceil(this.state.total / 9)){
        }
        else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8de3e24b65aa4c08967682c5bcfe81de&page=${this.state.page + 1}&pageSize=9`
        this.setState({loading: true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page : this.state.page + 1,
            articles : parsedData.articles,
            loading: false
        })
    }
    }
    
  render() {
    return (
        <>
        <div className="container my-5">
        <h1 className="d-flex justify-content-center my-4">Top Headlines of Today!</h1>
        {this.state.loading && <Preloader className='d-flex justify-content-center'/> }
            <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4 my-2 d-flex justify-content-center" key={element.publishedAt}>
                    <NewsItem title={element.title!=null? element.title:element.title + "..."} description={
                        element.description!=null? element.description.slice(0,88):element.description} imageUrl={element.urlToImage} url={element.url}/>
                </div>
                })}
            </div>
        </div>
        <div className="container d-flex justify-content-around my-4">
            <button disabled={this.state.page<=1} type="button" className="btn btn-light" onClick={this.prevPage}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.total / 9)} type="button" className="btn btn-light" onClick={this.nextPage}>Next &rarr;</button>
        </div>
        </>
    )
  }
}

export default NewsComp
