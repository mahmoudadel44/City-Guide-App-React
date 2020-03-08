import React, { Component } from "react";
import { placeInfo, detailInfo } from "../../data";
import InfoCard from "../cards/InfoCard";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeInfo: placeInfo,
      detailInfo: {}
      // handleDetail:handleDetail
    };
  }
  // getItem = id => {
  //   const item = this.state.placeInfo.find(item => item.id === id);
  //   console.log('item',item)
  //  //  debugger
  //   return item;
  // };
  handleDetail = id => {
    const item = this.getItem(id);
    this.setState({
      detailInfo: item
    }       
      );
      // debugger
    console.log('detailInfo',this.state.detailInfo)
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.placeInfo.map(item => (
            <InfoCard
              item={item}
              key={item.id}
              // handleDetail={()=>this.handleDetail(item.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Home;
