import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 class NotFoundPage extends Component {
    render() {
        return (
            <div className="text-center mb-5">
                <h2 className="mb-3 mt-5" style={{fontSize:'60px'}}>ops !</h2>
                <h3>Error 404 Not Found</h3>
                <p style={{color:'gray'}}>sorry an error occured. the requested page was not found!</p>
                <Link className="btn btn-outline-primary mr-3" to="/"><i className="fa fa-home"></i>&nbsp;Back To main</Link>
                <Link className="btn btn-outline-secondary mr-3"><i className="fa fa-envelope">&nbsp;Support</i></Link>

            </div>
        )
    }
}


export default NotFoundPage;
