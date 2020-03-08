// import React, { Component } from "react";
// import { placeInfo, reviews, detailInfo, news } from "../data";
// import Home from "./pages/Home";
// class InfoProvider extends Component {
//   state = {
//     placeInfo: placeInfo,
//     reviews: reviews,
//     detailInfo: detailInfo,
//     news: news,
//     myReviews:[]
//   };
// //   getArray = data => {
//     let options=[]
//   if (data) {
// data.map(item=>(
//   options.push({id:item.id,name:item.name})
// ))
//   }
//   return options
// };
//   componentDidMount() {
//     let myReviews=this.getArray(this.state.reviews)
//     this.setState({myReviews})
//     console.log('reviews context =',myReviews)
//     // console.log('reviews=',reviews)
//   }

//   render() {
//   console.log('reviews=')
//     return <Home placeInfo={this.state.placeInfo}/>;
//   }
// }
// export default InfoProvider;
