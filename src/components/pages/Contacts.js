import React, { Component } from 'react'
 class Contacts extends Component {
    render() {
        return (
            <section>
<div className="container">
<div className="row">
    <div className="col-md-7">
        <h3 className="text-center mt-3">Our Location</h3>
    <iframe src="https://www.google.com/maps/d/embed?mid=1etkY_SnaKYMajyIsZ5uXUm46tcy5O4Vg"
     style={{frameborder:'0',width:'100%',height:'300px',border:'0',marginBottom:'10px',marginTop:'10px'}}
     allowFullScreen
     >

     </iframe>
    

    </div>
    <div className="col-md-5" style={{marginTop:'27px'}}>
     <h3 className="text-center">Contact us</h3>
     <form>
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Name"/>
  </div>
  <div class="form-group">
    <input type="email" class="form-control" placeholder="Email"/>
  </div>
  <div class="form-group">
    <input type="tel" class="form-control" placeholder="Phone"/>
  </div>
  <textarea class="form-control" placeholder="Message" cols="100" rows="3"/>
  <button type="submit" class="btn btn-primary mt-2 mb-2"><i class="fab fa-telegram-plane"></i>&nbsp;Submit</button>
</form>
</div>
    </div>

</div>
</section>
        )
    }
}


export default Contacts;