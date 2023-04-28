import React from "react";
//import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
const tourPic = require("../../images/tourList.png");
const addTourPic = require("../../images/addTour.png");
const bookPic = require("../../images/book.png");

const UserSearchTour = () => {

  const [destination, setDestination] = useState("");

  return (
    <div
      style={{
        background: `linear-gradient(to right, #D2DAFF ,#EFEFEF, #B1B2FF)`,
        height: "100vh",
        maxWidth: "100%",
      }}
    >
      <div className="row" style={{ maxWidth: "100%" }}>
        <div className="col"></div>
        <div className="col">
          <div style={Styles.divStyle}>
            <div className="mb-3" style={{ marginRight: "180px" }}>
              <img src={addTourPic}></img>
              <input type="text" required className="form-control" id="exampleFormControlInput1" name="destination" placeholder="Enter Destination" onChange={(e) => setDestination(e.target.value)} />
              <Link
                className="btn btn-info"
                to={`/getbydestination/${destination}`}
                style={Styles.buttonStyle}
              >
                Search By Destination
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>

            <div className="mb-3" style={{ marginRight: "180px" }}>
              <img src={addTourPic}></img>
              <Link
                className="btn btn-info"
                to={`/getByDuration`}
                style={Styles.buttonStyle}
              >
                Search By Duration
              </Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>

            <div className="mb-3" style={{ marginRight: "180px" }}>
              <img src={bookPic}></img>
              <Link
                className="btn btn-info"
                to={`/getByBudget`}
                style={Styles.buttonStyle}
              >
                Search By Budget
              </Link>
              &nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Styles = {
  divStyle: {
    //backgroundColor:"#F7ECDE",
    //border:"solid",
    borderStyle: "thin",
    width: "40%",
    display: "flex",

    margin: "auto",
    marginTop: "30vh",
    borderRadius: 30,
    padding: "20px",
    justifyContent: "center",
    alignItems: "center",
    //boxShadow: "3px 3px 10px 2px #C00000",
    // backgroundColor:"#F0EBE3"
  },
  loginText: {
    textAlign: "center",
    color: "#C00000",
    fontStyle: "arial",
    marginTop: 10,
  },
  buttonStyle: {
    marginTop: 10,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
    width: "15vw",
    height: 40,
    backgroundColor: "#D83A56",
    color: "white",
    borderRadius: 5,
    border: "none",
  },
};

export default UserSearchTour;
