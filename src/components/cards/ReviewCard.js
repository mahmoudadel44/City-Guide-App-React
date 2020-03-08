import React from 'react'
import {Link} from 'react-router-dom'
 const ReviewCard=({item})=> {
    //  console.log(item)
    return (
        <div class="media text-left mb-3">
        <img class="mr-3" src={item.avatar} alt="Generic placeholder image" style={{width:'50px'}}/>
        <div class="media-body">
    <h5 class="mt-0">{item.name}</h5>
     <p className="lead" style={{ color:'#7A7A7A'}}>{item.comment}</p>
            </div>
      </div>
    )
}

export default ReviewCard;






