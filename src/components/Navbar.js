import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,NavLink,withRouter} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
    <div>
    <ul class="nav nav-tabs">
  <li class="nav-item">
    <li><Link className="nav-link active" data-toggle to="/">Home</Link></li>

  </li>
  <li class="nav-item">
    <li><NavLink className="nav-link" data-toggle="tab" to="/About">About</NavLink></li>

  </li>
  <li class="nav-item">
    <li><NavLink className="nav-link" data-toggle="tab" to="/contactus">Contactus</NavLink></li>

  </li>
  </ul>
  </div>
    )
  }
}
export default withRouter(Navbar)