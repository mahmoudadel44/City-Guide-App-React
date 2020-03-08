import React from 'react'

 const  ourPrices=()=> {
    return (
        <div>
            {/* <!-- start Section price table -->  */}
            <section className="price_table text-center">
               <div className="container">
               <h2 className="h1 mb-5">Our Amazing prices</h2>
               <div className="row">
              <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="price_box wow fadeInUp" data-wow-delay="0.2s" data-wow-offset="400">
            <h2 className="text-primary">Hosting</h2>
            <p className="center-block">$40</p>
            <ul className="list-unstyled">
              <li>space:50Gb</li>
              <li>Emails:30</li>
              <li>Ips:3ip</li>
              <li>Databases:15</li>
              <li>FTB Accounts:4</li>
            </ul>
            <a href="#" className="btn btn-primary">Order Now</a>
          </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-xs-12">
                <div className="price_box wow fadeInDown" data-wow-delay="0.2s" data-wow-offset="400">
                  <h2 className="text-success">Vps</h2>
              <p className="center-block">$40</p>
              <ul className="list-unstyled">
                <li>space:50Gb</li>
                <li>Emails:40</li>
                <li>Ips:5ip</li>
                <li>Databases:12</li>
                <li>FTB Accounts:6</li>
              </ul>
              <a href="#" className="btn btn-success">Order Now</a>
                </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="price_box wow fadeInUp" data-wow-delay="0.2s" data-wow-offset="400">
                    <h2 className="text-info">Dedicated</h2>
                <p className="center-block" style={{color:'gray'}}>$40</p>
                <ul className="list-unstyled">
                  <li>space:10Gb</li>
                  <li>Emails:30</li>
                  <li>Ips:3ip</li>
                  <li>Databases:12</li>
                  <li>FTB Accounts:4</li>
                </ul>
                <a href="#" className="btn btn-info">Order Now</a>
                  </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-xs-12">
                    <div className="price_box wow fadeInDown" data-wow-delay="0.2s" data-wow-offset="400">
                      <h2 className="text-danger">Cloud</h2>
                  <p className="center-block text-center">$40</p>
                  <ul className="list-unstyled">
                    <li>space:20Gb</li>
                    <li>Emails:15</li>
                    <li>Ips:4ip</li>
                    <li>Databases:11</li>
                    <li>FTB Accounts:6</li>
                  </ul>
                  <a href="#" className="btn btn-danger">Order Now</a>
                  <i className="fa fa-pencil" title="Edit"></i>
                                    </div>

               </div>
               </div>
               </div>
               </section>
                {/* <!-- end Section price table --> */}

        </div>
    )
}

export default ourPrices;