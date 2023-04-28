import { useState } from "react";
import UserProfileService from "../../Services/UserProfileService";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  
  const navigate=useNavigate();
  
  function nav(){
    navigate('/editProfile')
  }
  const [Profile, setProfile] = useState("");
  

  let userId = sessionStorage.getItem("userId");
  console.log(userId);

  function init() {
    UserProfileService.getPersonalDetailsByUser(userId)
      .then((response) => {
        console.log("User Profile: ", response.data);
        setProfile(response.data);
        // console.log(Profile);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div style={{height:"100vh" , backgroundColor:"#ddbdf5cc"}} >
    <div style={{ paddingTop : "20vh"}}>
      <div className="container-fluid" style={Styles.divStyle}>
        
        <div style={{ padding: "15px", width: "100%" }}>
        <div className="col-12 row">
          <div className="col-6">
          <span style={{ fontFamily: "inherit",fontWeight: 500,fontSize : "30px"}}>{"User Profile"} </span>
          </div>

          <div className="col-6 plr-0" style={{textAlign : "right"}}>
          <button className="btn btn-outline-primary" style={Styles.buttonStyle} onClick={nav}>Edit</button>
          </div>
        </div>

          <hr />
          <div className="col-12 row">
            <div className="col-6">
            <span
            style={{
              display: "flex",justifyContent: "left",alignItems: "left",paddingTop : "10px"
            }}
          >
            <span style={{ fontFamily: "inherit" , fontSize:"17px", fontWeight:"bold"}}>
              First Name: &nbsp;
            </span>
            <span style={{ fontFamily: "inherit" , fontSize:"17px"}}>
              {Profile.firstName}
            </span>
          </span>

          <span>
            <span style={{ fontFamily: "inherit" , fontSize:"17px",fontWeight:"bold" }}>
              Last Name: &nbsp;
            </span>
            <span style={{ fontFamily: "inherit" , fontSize:"17px"}}>
              {Profile.lastName}
            </span>
          </span>

          <span style={{display: "flex",justifyContent: "left",alignItems: "left",paddingTop : "10px" }}>
            <span style={{ fontFamily: "inherit" , fontSize:"17px",fontWeight:"bold"}}>
              Email: &nbsp;
            </span>
            <span style={{ fontFamily: "inherit" , fontSize:"17px"}}>
              {Profile.email}
            </span>
          </span>

          <span style={{display: "flex",justifyContent: "left",alignItems: "left",paddingTop : "10px"}} >
            <span style={{ fontFamily: "inherit" , fontSize:"17px",fontWeight:"bold"}}>
              dob: &nbsp;
            </span>
            <span style={{ fontFamily: "inherit" , fontSize:"17px"}}>
              {Profile.dob}
            </span>
          </span>
          <span
            style={{display: "flex",justifyContent: "left",alignItems: "left",paddingTop : "10px"}}
          >
            <span style={{ fontFamily: "inherit" , fontSize:"17px",fontWeight:"bold"}}>
              phone no: &nbsp;
            </span>
            <span style={{ fontFamily: "inherit" , fontSize:"17px"}}>
              {Profile.phoneNo}
            </span>
          </span>
          <span
            style={{display: "flex",justifyContent: "left",alignItems: "left",paddingTop : "10px"
            }}
          >
            <span style={{ fontFamily: "inherit" , fontSize:"17px",fontWeight:"bold"}}>
              Address: &nbsp;
            </span>
            <span style={{ fontFamily: "inherit" , fontSize:"17px"}}>
              {Profile.address}
            </span>
          </span>
            </div>
          </div>
          
        </div>
      </div>
      </div>
    </div>
  );
};
const Styles = {
  divStyle: {
    backgroundColor: "#ffff",
    borderStyle: "thin",
    width: "30%",
    display: "flex",
    marginTop: "5vh",
    borderRadius: "4px",
    padding: "20px",
    //boxShadow: "2px 2px 30px 2px #6B61FF",
    border: "1px solid rgba(0, 0, 0, 0.125)"
  },
  buttonStyle:{
           
    marginTop:10,
    position:"relative",
    justifyContent:'center', alignItems:'center', height: '50vh',
    width: '8vw',
    height:40,
    borderRadius: 2}

}

export default UserProfile;
