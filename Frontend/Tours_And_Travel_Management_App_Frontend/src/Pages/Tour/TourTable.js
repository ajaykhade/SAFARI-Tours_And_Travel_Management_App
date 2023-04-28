import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TourServices from "../../Services/TourServices";
import { toast } from 'react-toastify';
const homeIcon = require("../../images/homeIcon.png")
const people = require("../../images/people.png")
const transport = require("../../images/transport.png")


const TourTable = () => {

  const [Tours, setTours] = useState([])

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

  const handleDelete = (tourId) => {
    console.log('Printing id', tourId);
    TourServices.removeTour(tourId)
      .then(response => {
        console.log('tour deleted successfully', response.data);
        toast.success("deleted successfully")
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }
  return (
    <div style={{ marginTop: "11vh", background: `linear-gradient(to right, #D2DAFF ,#EFEFEF, #B1B2FF)`, minHeight: "100vh", maxWidth: "100%" }}>
      <br />
      {Tours.map((tour) => {

        return (

          <div className="container-fluid" style={Styles.divStyle}>
            <div style={{ padding: "5px", minWidth: "60%", maxWidth: "70%" }}>
              <div style={{ display: "flex", justifyContent: "left", alignItems: "left" }}>
                <h4 style={{ fontFamily: "Uchen, serif" }}> {tour.source}  to  {tour.destination}  </h4>
              </div>
              <hr />
              <br />
              <h2 style={{ fontFamily: "Uchen, serif" }}>{tour.tourName}</h2>
              <p>
                <img src={people}></img>&nbsp;&nbsp;{tour.maxSeats} seats &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={transport}></img>&nbsp;&nbsp;{tour.transportationMode}
              </p>
              <br />
              <h5 style={{ fontFamily: "Uchen, serif" }}> Activities :<b> {tour.activities}</b></h5>
              <h5 style={{ fontFamily: "Uchen, serif" }}> Tour Type :<b> {tour.tourType}</b></h5>
              <h5 style={{ fontFamily: "Uchen, serif" }}> Tour Details :<b> {tour.tourDetailInfo}</b></h5>

              <br />
              <p>Start Date :&nbsp;&nbsp;<b>{tour.tourStartDate}</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;End Date :<b>{tour.tourEndDate}</b></p>
            </div>
            <span style={{ maxWidth: "35%" }}>
              <br></br><br />
              <h2 style={{ marginTop: "1vw" }}>{tour.bookingAmount}/-</h2>
              <h6 style={{ color: "#7E7474" }}>per person</h6>
              <br />

              <div style={{ display: "flex" }}>
                <Link className="btn btn-info" to={`/updateTour/${tour.tourId}`} style={Styles.buttonStyle} state={{ select: tour.tourId }} >Update</Link>&nbsp;&nbsp;&nbsp;
                <button type="button" style={Styles.buttonStyle} onClick={() => { handleDelete(tour.tourId) }}>Delete</button>
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
    display: "flex",
    marginTop: "5vh",
    borderRadius: "5px",
    padding: "20px",
    //boxShadow: "3px 3px 10px 2px #C00000",
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
    width: '7vw',
    height: 40,
    backgroundColor: '#BC012E',
    color: 'white',
    borderRadius: 5,
    border: 'none',
  }

}

export default TourTable