import React from "react";
import facebook from './images/bookmark/facebook.png'
import google from './images/bookmark/google.png'
import twitter from './images/bookmark/twitter.png'
import ointerest from './images/bookmark/ointerest.png'
import rss  from './images/bookmark/rss.png'
import email from './images/bookmark/email.png'
import calc from './images/articles/calc.png'
import users from './images/articles/users.png'
import ball from './images/articles/ball.png'
import intel from './images/work/intel.png'
import sun from './images/work/sun.png'
import search from './images/work/search.png'
import computer from './images/work/computer.png'
const Footer = () => {
  return (
    <section className="footer">
    <div className="container">
    <div className="row">
     <div className="col-lg-4 col-md-6">
      <h3>site map</h3>
      <ul className="list-unstyled three-columns">
       <li>Home</li>
       <li>About</li>
       <li>Company</li>
       <li>Code</li>
       <li>Design</li>
       <li>Host</li>
       <li>Solutions</li>
       <li>Sitemap</li>
       <li>contact</li>
      </ul>
      <ul className="list-unstyled social-list" >
       <li><img src={facebook} alt="facebook"/></li>
       <li><img src={google} alt="google"/></li>
       <li><img src={twitter} alt="twitter"/></li>
       <li><img src={ointerest} alt="pinterest"/></li>
       <li><img src={rss} alt="rss"/></li>
       <li><img src={email} alt="email"/></li>
      </ul>
     </div>
     <div className="col-lg-4 col-md-6">
       <h3>Latest Articles</h3>
       <div className="media">
       <a className="pull-left" href="#">
       <img className="media-object" src={calc} alt="calc"/>
       </a>
       <div className="media-body">
       <div className="media-heading">
        <h4>Programming</h4>
       This is some text about programming This is some text about programming of Company
       </div>
       </div>
       </div>

       <div className="media">
         <a className="pull-left" href="#">
         <img className="media-object" src={users} alt="users"/>
         </a>
         <div className="media-body">
         <div className="media-heading">
          <h4>Coding</h4>
         This is some text about Coding This is some text about Coding of Company professionally
         </div>
         </div>
       </div>
         <div className="media">
           <a className="pull-left" href="#">
           <img className="media-object" src={ball} alt="ball"/>
           </a>
           <div className="media-body">
           <div className="media-heading">
            <h4>Web Design</h4>
           This is some text about Web Design This is some text about Web Design of Company
           </div>
           </div>
           </div>
           </div>
      <div className="col-lg-4">
       <h3>Our Awesome</h3>
       <img src={search} className="img-thumbnail"/>
       <img src={intel} className="img-thumbnail"/>
       <img src={sun} className="img-thumbnail"/>
       <img src={computer} className="img-thumbnail"/>
      </div>
    </div>
    </div>
    <div className="copyright text-center">
    Copyright &copf; 2020 <span>Your Template Name</span> .Work 
    </div>
    </section>
 
  );
};

export default Footer;
