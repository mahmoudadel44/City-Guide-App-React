import React, { Component, Fragment } from "react";
import { placeInfo} from "../../data";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Reviews from './Reviews' 
import{getPlaceInfo} from '../../actions'
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailInfo:[]
    };
  }
  // componentWillMount(){
  //   this.props.getPlaceInfo(this.props)
  // }
  render() {
    return (
      <Fragment>
        {/* start section of header and icons */}
        <div className="myContain container-fluid text-center">
          <h1 className="font-weight-bold text-uppercase">
            {this.state.detailInfo.headerTitle}
          </h1>
          <span className="text-uppercase font-weight-bold">
            {this.state.detailInfo.headerSubTitle}
          </span>

          <p
            className="font-weight-bold text-uppercase"
            style={{ color: "gray" }}
          >
            {this.state.detailInfo.headerText}
          </p>

          {/* <div><img className="card-img-top" src={this.state.detailInfo.img} alt={this.state.detailInfo.headerTitle}/></div>   */}
          {/* social icons container*/}

          <div className="container text-center">
            <div className="socialRow row justify-content-center">
              <div className="col-sm-4 col-md-2">
                <a href="https://www.facebook.com/thawartshad/">                <i
                  className="fab fa-facebook-f fa-2x"
                  style={{ color: "#FFF" }}
                ></i></a>
              </div>
              <div className="col-sm-4 col-md-2">
                <a href="https://twitter.com/login?lang=ar">
                <i
                  className="fab fa-twitter fa-2x"
                  style={{ color: "#FFF" }}
                ></i></a>
              </div>
              <div className="col-sm-4 col-md-2">
                <a href="https://aboutme.google.com/u/0/?referer=gplus">                <i
                  className="fab fa-google-plus-g fa-2x"
                  style={{ color: "#FFF" }}
                ></i></a>
              </div>
              <div className="col-sm-4 col-md-2">
                <a href="https://www.reddit.com/">
                <i
                  className="fab fa-reddit fa-2x"
                  style={{ color: "#FFF" }}
                ></i></a>
              </div>
              <div className="col-sm-4 col-md-2">
                <a href="https://www.whatsapp.com/">                <i
                  className="fab fa-whatsapp fa-2x"
                  style={{ color: "#FFF" }}
                ></i></a>
              </div>
              <div className="col-sm-4 col-md-2">
                <i
                  className="fab fa-facebook-messenger fa-2x"
                  style={{ color: "#FFF" }}
                ></i>
              </div>
            </div>
          </div>
          {/* end secion of header and icons */}
          {/* start tab Links section*/}
          <div className="container">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="aboutplace-tab"
                  data-toggle="tab"
                  href="#aboutplace"
                  role="tab"
                  aria-controls="aboutplace"
                  aria-selected="true"
                >
                  about place
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="reviews-tab"
                  data-toggle="tab"
                  href="#reviews"
                  role="tab"
                  aria-controls="reviews"
                  aria-selected="false"
                >
                  reviews
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="map-tab"
                  data-toggle="tab"
                  href="#map"
                  role="tab"
                  aria-controls="map"
                  aria-selected="false"
                >
                  map
                </a>
              </li>
            </ul>
            {/* end tab Links section*/}
            {/* tab panels */}
            {/* about tab banel */}
            <div className="tab-content mt-5" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="aboutplace"
                role="tabpanel"
                aria-labelledby="aboutplace-tab"
              >
                <h2 className="mb-3">{this.state.detailInfo.title}</h2>
                <p className="font-weight-bold">
                  {this.state.detailInfo.description}
                </p>

                <img
                  src={this.state.detailInfo.img}
                  className="img-thumbnail text-center mb-3"
                />
              </div>
              <div
                className="tab-pane fade"
                id="reviews"
                role="tabpanel"
                aria-labelledby="reviews-tab"
              >
<Reviews/>
</div>
              <div
                className="tab-pane fade"
                id="map"
                role="tabpanel"
                aria-labelledby="map-tab"
              >
                <iframe
                  src={this.state.detailInfo.maps}
                  style={{
                    width: "100%",
                    height: "450px",
                    frameborder: "0",
                    border: "0",
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({getPlaceInfo},dispatch)
  }
function mapStateToProps(state){
  console.log('data=',state)
return{
  placeInfo:state.placeInfo
  
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Details);
