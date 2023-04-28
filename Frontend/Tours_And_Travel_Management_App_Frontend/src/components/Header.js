import { Link } from "react-router-dom";
import React, { Component } from "react";
import '../CSS/Header.css';
import { toast } from "react-toastify";
import swal from 'sweetalert';
//import safari from '../images/s1.png';

//const logo= require("../images/brandLogo.png")
const logo2 = require("../images/logo.png")
const user = sessionStorage.getItem("userId");
const uID = user ?? ' '

const role = sessionStorage.getItem("role");
const name = sessionStorage.getItem("firstName");

export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            show: true,
        }
    }

    logout() {
        // sessionStorage.removeItem("token");
        sessionStorage.removeItem("userId");
        sessionStorage.removeItem("role");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("firstName");

        window.location.href = "http://localhost:3000";
        toast.success("Logged out Successfully!! Visit Again!!");
    }

    render() {

        return (
            <nav className="navbar navbar-expand-lg fixed-top " style={{ backgroundColor: "light blue" }}>
                <div className="container" >

                    <div ><Link to={'/'}><img src={logo2} alt="@" width={150} height={80} /></Link></div>

                    {/* <Link className="navbar-brand text-info" to={'/'} ><h2 >INFINITY TRAVELS</h2></Link> */}

                    <button className="navbar-toggler border border-info text-info"
                        onClick={() => { this.setState({ show: !this.state.show }) }} >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>

                        <ul className="navbar-nav ms-auto">
                            {/* <li className="nav-item">
                            <Link className="nav-link text-light" to={'/'} style={{color:"#1B2430",fontFamily: "Uchen, serif"}}><h5>Home</h5></Link>
                        </li> */}

                            <li className="nav-item" style={{}}>
                                <Link className="nav-link text-dark" to={'/'} style={{ color: "#1B2430", fontFamily: "Uchen, serif" }}><h5>Home</h5></Link>
                            </li>

                            <li className="nav-item">
                                {uID === ' ' ? <Link className="nav-link text-dark" to={'/signIn'} style={{ color: "#1B2430", fontFamily: "Uchen, serif" }}><h5>Login</h5></Link> : ' '}
                            </li>
                            <li className="nav-item">
                                {role === 'USER' ? <Link className="nav-link text-dark" to={'/userProfile'} style={{ color: "#1B2430", fontFamily: "Uchen, serif" }}><h5>Profile</h5></Link> : ' '}
                            </li>
                            <li className="nav-item ">
                                {uID === ' ' ? <Link className="nav-link text-dark" to={'/signUp'} style={{ color: "#1B2430", fontFamily: "Uchen, serif" }}><h5>Register</h5></Link> : ' '}
                            </li>

                            <li className="nav-item">
                                {role === 'USER' || uID === ' ' ? <Link className="nav-link text-dark" to={'/userTourTable'} style={{ color: "#1B2430", fontFamily: "Uchen, serif" }}><h5>Tours</h5></Link> : <Link className="nav-link text-dark" to={'/tourTable'} style={{ color: "#1B2430", fontFamily: "Uchen, serif" }}><h5>Tours</h5></Link>}
                            </li>

                            {/* <li className="nav-item">
                        {role ==='ADMIN' ||uID ===' ' ?'':<Link className="nav-link text-dark" to={'/getBookedTours'}style={{color:"#1B2430",fontFamily: "Uchen, serif"}}><h5>BookedTours</h5></Link>}
                        </li> */}

                            <li className="nav-item">
                                {role === 'ADMIN' ? <Link className="nav-link text-dark" to={'/admin'} style={{ color: "#1B2430", fontFamily: "Uchen, serif" }}><h5>Admin</h5></Link> : ''}
                            </li>

                            <li className="nav-item">
                                {role === 'USER' ? <Link className="nav-link text-dark" to={'/getBookedTours'} style={{ color: "#1B2430", fontFamily: "Uchen, serif" }}><h5>BookedTours</h5></Link>
                                    : role === 'ADMIN' ? <Link className="nav-link text-dark" to={'/getallbookings'} style={{ color: "#1B2430", fontFamily: "Uchen, serif" }}><h5>BookedTours</h5></Link> : ''}

                            </li>

                            <li className="nav-item">
                                {role === 'USER' || uID === ' ' ? <Link className="nav-link text-dark" to={'/feedback'} style={{ color: "#1B2430", fontFamily: "Uchen, serif" }}><h5>Feedback</h5></Link> : ''}

                            </li>

                            <li className="nav-item">

                                {role === 'ADMIN' ? <Link className="nav-link text-dark" to={'/getFeedback'} style={{ color: "#1B2430", fontFamily: "Uchen, serif" }}><h5>Reviews</h5></Link> : ''}
                            </li>

                            <li className="nav-item">
                                {role === 'ADMIN' ? <Link className="nav-link text-dark" to={'/search'} style={{ color: "#1B2430", fontFamily: "Uchen, serif" }}><h5>SearchTour&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5></Link>
                                    : <Link className="nav-link text-dark" to={'/gettours'} style={{ color: "#1B2430", fontFamily: "Uchen, serif" }}><h5>SearchTour&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5></Link>}
                            </li>




                            {uID === ' ' ? ' ' : <h5 style={{ marginTop: "8px", marginLeft: "2vw", fontFamily: "Georgia, serif", color: "#143F6B" }}> &nbsp;&nbsp;&nbsp;&nbsp;<b>Welcome,&nbsp;{name}</b> </h5>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            {uID === ' ' ? ' ' : <Link className="btn btn-danger" onClick={this.logout} to={'/'} type="submit" style={{ height: "5.5vh", }} > Logout </Link>}

                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}

