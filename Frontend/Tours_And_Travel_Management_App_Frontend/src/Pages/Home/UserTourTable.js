import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TourServices from "../../Services/TourServices";
import { useLocation } from 'react-router-dom';
const homeIcon = require("../../images/homeIcon.png")
const people = require("../../images/people.png")
const transport = require("../../images/transport.png")



const UserTourTable = () => {

  const [Tours, setTours] = useState([])
  const user = sessionStorage.getItem("userId");
  const uID = user ?? ' '

  const location = useLocation();
  //let seats=location.state.select1;


  const init = () => {
    TourServices.getAllTours()
      .then(response => {
        console.log('Printing tours', response.data);
        setTours(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div style={{ marginTop: "11vh", background: `linear-gradient(to right, #D2DAFF ,#B1E693, #B1B2FF)`, minHeight: "100vh" }}>
      <br />
      {Tours.map((tour) => {

        return (

          <div key={tour.tourId} className="container-fluid" style={Styles.divStyle}>
            <div style={{ padding: "5px", width: "80%" }}>
              <div style={{ display: "flex", justifyContent: "left", alignItems: "left" }}>
                <h4 style={{ fontFamily: "Uchen, serif" }}> {tour.source}  to  {tour.destination}  </h4>
              </div>
              <hr />
              <h2 style={{ fontFamily: "Uchen, serif" }}>{tour.tourName} package</h2>
              <p><img src={homeIcon}></img>{tour.duration}&nbsp;days &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={people}></img>{tour.maxSeats} seats &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={transport}></img>{tour.transportationMode}
              </p>

              <h5 style={{ fontFamily: "Uchen, serif" }}> Activities :<b> {tour.activities}</b></h5>
              <h5 style={{ fontFamily: "Uchen, serif" }}> Tour Type :<b> {tour.tourType}</b></h5>
              <h5 style={{ fontFamily: "Uchen, serif" }}> Tour Details :<b> {tour.tourDetailInfo}</b></h5>

              <p>Start Date :&nbsp;&nbsp;<b>{tour.tourStartDate}</b>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;End Date :<b>{tour.tourEndDate}</b></p>


            </div>
            <span style={{ justifyContent: 'center', alignItems: 'center' }}>
              <br></br><br />
              <h2 style={{ marginTop: "1vw" }}>{tour.bookingAmount}/-</h2>
              <h6 style={{ color: "#7E7474" }}>per person</h6>
              <br />

              <div style={{ display: "flex" }}>

                {uID === ' ' ? ' ' : <Link className="btn btn-info" to={`/add-tourists`} state={{ select: tour.tourId, amt: tour.bookingAmount, seat: tour.maxSeats }} style={Styles.buttonStyle}>Book</Link>}


              </div>
            </span>
          </div>
        )
      }
      )}
    </div>

  )
}

const Styles = {

  divStyle: {
    backgroundColor: "#F7ECDE",
    //border:"solid",
    borderStyle: "thin",
    maxWidth: "50vw",
    minWidth: "50vw",
    display: "flex",
    marginTop: "5vh",
    borderRadius: "5px",
    padding: "20px",
    //boxShadow: "3px 3px 3px 2px #00D7FF",
    // backgroundColor:"#F0EBE3"
  },
  loginText: {
    textAlign: "center",
    color: "#C00000",
    fontStyle: "arial", marginTop: 10,


  },
  buttonStyle: {

    marginTop: 10,
    position: "relative",
    justifyContent: 'center', alignItems: 'center', height: '50vh',
    width: '8vw',

    height: 40,
    backgroundColor: '#BC012E',
    color: 'white',
    borderRadius: 5,
    border: 'none',
  }

}

export default UserTourTable