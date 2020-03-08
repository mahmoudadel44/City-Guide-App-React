
import React, { Component } from "react";
import { reviews} from "../../data";
import ReviewCard from '../cards/ReviewCard' 
 class Reviews extends Component{
     constructor(props){
         super(props);
         this.state = {
            reviews: reviews
          };
    }
   
    render(){
     return(
        <div className="container">    
        <div className="row">      
{this.state.reviews.map(item=>(      
               <ReviewCard item={item} key={item.id}/>
            ))}
          </div>
          </div>
     )
    }
 
 }
export default Reviews;