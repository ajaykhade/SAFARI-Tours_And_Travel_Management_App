
import React from 'react'
import { useState, useEffect } from 'react';
import FeedBackService from "../../Services/FeedBackService";
const star = require("../../images/star.png");

const GetFeedback = () => {

  const [Feedback, setFeedback] = useState([])

  const init = () => {
    FeedBackService.getAllFeedBacks()
      .then((response) => {
        console.log("Printing feedbacks: ", response.data);
        setFeedback(response.data);
        console.log("All feedbacks: " + Feedback);
      })
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="container-fluid" style={{ display: "flex", marginTop: "0vh", justifyContent: 'center', alignItems: 'center', background: `linear-gradient(to right, #D2DAFF ,#EFEFEF, #B1B2FF)`, height: "100vh", maxWidth: "100%" }}>

      {Feedback.map((feedback) => {
        return (

          <div className="card" style={Styles.divStyle}>
            <div className="card-body">
              <h5 className="card-title"><img src={star}></img>{feedback.rating}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Name : {feedback.firstName}</h6>
              <h6 className="card-subtitle mb-2 text-muted">Email Id : {feedback.email}</h6>
              <p className="card-text">{feedback.comment}</p>
            </div>

          </div>

        )
      })

      }
    </div>
  )
}

const Styles = {

  divStyle: {
    backgroundColor: "#F7ECDE",
    //border:"solid",
    borderStyle: "thin",
    width: "18rem",
    marginTop: "5vh",
    marginLeft: "5vw",
    borderRadius: "5px",
    padding: "10px",
    //boxShadow: "3px 3px 10px 2px #C00000",
    // backgroundColor:"#F0EBE3"
  },
  loginText: {
    textAlign: "center",
    color: "#C00000",
    fontStyle: "arial", marginTop: 10,


  },

}

export default GetFeedback
