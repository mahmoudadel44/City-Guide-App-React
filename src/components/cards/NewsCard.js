import React from "react";
import {Link} from 'react-router-dom'
const NewsCard = ({ item }) => {
  return (
<div className="card mt-2 mb-3">
   <div className="card-body">
     <h4 className="card-title">{item.newsTitle}</h4>
    <p className="card-text" style={{color:'gray'}}>{item.newsText}</p>
    <Link className="card-link" to="/">
      Read More >>
      </Link>
   </div>
     </div>
  );
};

export default NewsCard;
