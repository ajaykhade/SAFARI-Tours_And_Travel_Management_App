import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BookingService from "../../Services/BookingService";
import { toast } from "react-toastify";
const homeIcon = require("../../images/homeIcon.png");
const people = require("../../images/people.png");
const transport = require("../../images/transport.png");

const GetAllBookedTours = () => {
  const [Tours, setTours] = useState([]);

  //const [Bookings, setBookings] = useState([]);
  const [bookId, setBookId] = useState();

  let bookingId;

  // const userId=sessionStorage.getItem("userId");
  // console.log(userId)

  const navigate = useNavigate;

  const init = () => {
    BookingService.getAllBookings()
      .then((response) => {
        console.log("Printing Bookings", response.data);


        response.data.forEach((e, i) => {
          response.data[i]["tourists"] = []
          BookingService.getAllTouristByBookingId(e.bookingId).then((res) => {
            response.data[i].tourists = [...res.data]
          })
        })

        setTours(response.data);
        bookingId = response.data.bookingId;
        console.log(bookingId);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
        toast.error("You have no bookings yet, " + sessionStorage.getItem("name"))
      });
  };

  const handleDelete = (bookingId) => {
    console.log("Booking id :", bookingId);
    BookingService.deleteBooking(bookingId).then((response) => {
      console.log("booking deleted successfully ", response.data);
      toast.success("Booking cancelled successfully");
      window.location.reload();
      //navigate('/getBookedTours')
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (

    <div style={{ marginTop: "10vh", background: `linear-gradient(to right, #B4AEE8 ,#EFEFEF, #93329E)`, minHeight: "100vh" }}>
      <br /><br />
      {Tours.map((tour) => {
        return (
          <div className="container-fluid" style={Styles.divStyle}>
            {/* {tour.tourists.map((tourist)=>{
              return(
              <div>{tourist.name}</div>
              )
            })} */}
            <div style={{ padding: "5px", width: "70%" }}>
              <h2 style={{ fontFamily: "Uchen, serif" }}>{"Tour Name: " + "'" + tour.tourDetails.tourName + "'"}</h2>


              <hr />
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "left",
                }}
              >
                <h4 style={{ fontFamily: "Uchen, serif" }} >
                  {tour.tourDetails.source} to {tour.tourDetails.destination}{" "}
                </h4>
              </div>

              <p>
                <img src={transport}></img>
                {tour.tourDetails.transportationMode}
              </p>
              <br />
              <p>
                Start Date :&nbsp;&nbsp;<b>{tour.tourDetails.tourStartDate}</b>{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;End Date :
                <b>{tour.tourDetails.tourEndDate}</b>
              </p>

              <p>
                Booking Date :&nbsp;&nbsp;<b>{tour.bookingDate}</b>{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total Amount :
                <b>{tour.totalAmount}</b>
              </p>
            </div>
            <span style={{ maxWidth: "30%" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontSize: "18px" }}><b>{"Booking Id: " + tour.bookingId}</b></span>
              {/* <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontSize:"18px"}}><b>{"User Id: "+tour.user}</b></span>  */}
              <br></br>
              <br />
              <h3 style={{ marginTop: "1vw" }}>
                {tour.tourDetails.bookingAmount}/-
              </h3>
              <h6 style={{ color: "#7E7474" }}>per person</h6>

              <span style={{ fontSize: "15px" }}><b>{"No of Seats: " + tour.seatCount}</b></span>
              <br />

              <div style={{ display: "flex" }}>
                <button
                  type="button"
                  style={Styles.buttonStyle}
                  onClick={() => { handleDelete(tour.bookingId) }}
                >
                  Cancel Booking
                </button>
              </div>
            </span>
          </div>
        )
      })}
    </div>
  );
};

const Styles = {

  divStyle: {
    backgroundColor: "#F7ECDE",
    //border:"solid",
    borderStyle: "thin",
    maxWidth: "50vw",
    minWidth: "46vw",
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
    maxWidth: '70%',
    maxHeight: 40,
    backgroundColor: '#D83A56',
    color: 'white',
    borderRadius: 5,
    border: 'none',
  }

}

export default GetAllBookedTours;
