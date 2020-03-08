import React from 'react'
import {Link} from 'react-router-dom'
 const InfoCard=({item})=> {
  //  console.log(item)
    return (
        <div className="allinfo col-10 col-lg-4  mb-5">
        <div className="card" style={{width:'18rem',height:'550px'}}>
   <img className="card-img-top" src={item.img} alt={item.headerTitle}/>
      <div className="card-body">
        <h4 className="card-title">{item.headerTitle}</h4>
        <h6 className="card-title">{item.headerSubTitle}</h6>
       <p className="card-text" style={{color:'gray'}}>{item.headerText}</p>
        <Link
        // debugger
        to={`/Details/${item.id}`}className="btn btn-outline-primary text-uppercase">more info</Link>
      </div>
        </div>
        </div>
    )
}

export default InfoCard;






