import React, { Component } from 'react'
import {news} from '../../data'
import NewsCard from '../cards/NewsCard'
 class News extends Component {
     constructor(props){
     super(props)
     this.state={
         news:news
     }
     }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.news.map(item=>(
                   <NewsCard item={item} key={item.id}/>
                    ))}
                    </div>        
            </div>

        )
    }
}


export default News;