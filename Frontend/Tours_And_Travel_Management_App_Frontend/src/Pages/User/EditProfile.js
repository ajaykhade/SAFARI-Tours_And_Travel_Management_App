import React, { useState } from "react";
import UserProfileService from "../../Services/UserProfileService";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";




const EditProfile = () => {

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");

  let userId = sessionStorage.getItem("userId");
  console.log(userId);

  const updateProfile = (e) => {
    e.preventDefault();
    if (phoneNo.length < 10 || phoneNo.length > 10) {
      toast.error("mobile no. should be of length 10")
    }

    else if (address.length < 5 || address.length > 50) {
      toast.error('Address must be of min 5 characters and of max 50 characters')
    }

    else {

      const profile = { firstName, lastName, password, email, dob, phoneNo, address };

      if (userId) {
        UserProfileService.editProfile(profile, userId)
          .then((response) => {
            console.log("User Profile updated successfully: ", response.data);
            toast.success("Profile updated successfully");
            navigate('/userProfile')
            sessionStorage.setItem("name", firstName)
            window.location.reload();

            // console.log(Profile);
          })
          .catch((error) => {
            console.log("Something went wrong", error);
            toast.error("something went wrong");
          });
      }
    }
  };


  function init() {
    if (userId) {
      UserProfileService.getPersonalDetailsByUser(userId)
        .then(response => {
          console.log(response.data)
          setFirstName(response.data.firstName)
          setLastName(response.data.lastName)
          setEmail(response.data.email)
          setPassword(response.data.password)
          setDob(response.data.dob)
          setPhoneNo(response.data.phoneNo)
          setAddress(response.data.address)
        })
        .catch(error => {
          console.log('something went wrong', error);
        })
    }
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <div className="form-group" style={{ paddingTop: 90, height: "720px", position: "relative", background: `linear-gradient(to right, #B4AEE8 ,#EFEFEF, #93329E)` }}>
      <form onSubmit={updateProfile}>
        <div style={styles.container}>
          <div>
            <h2 style={styles.SignupText}>
              <b>Update Profile</b>
            </h2>
          </div>

          <div className="mb-3">
            <label>First Name</label>
            <input
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
              className="form-control"
              type="text"
              placeholder="Enter your First Name"
            />
          </div>

          <div className="mb-3">
            <label>Last Name</label>
            <input
              value={lastName}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
              className="form-control"
              type="text"
              placeholder="Enter your Last Name"
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              className="form-control"
              type="text"
              readOnly={true}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              className="form-control"
              type="text"
              readOnly={true}
            />
          </div>

          <div className="mb-3">
            <label>DOB</label>
            <input
              value={dob}
              onChange={(event) => {
                setDob(event.target.value);
              }}
              className="form-control"
              type="date"
              placeholder="Enter dob"
            />
          </div>

          <div className="mb-3">
            <label>Phone Number</label>
            <input
              value={phoneNo}
              onChange={(event) => {
                setPhoneNo(event.target.value);
              }}
              className="form-control"
              type="number"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-3">
            <label>Address</label>
            <input
              value={address}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
              className="form-control"
              type="text"
              placeholder="Enter your address"
            />
          </div>

          <div className="mb-3" style={{ marginTop: 15 }}>
            <button type="submit" style={styles.Button}>
              Update
            </button>

          </div>
        </div>
      </form>
    </div>
  );
};
const styles = {
  container: {
    borderColor: "crimson",
    //borderStyle: "thin",
    width: 400,
    height: 610,
    margin: "auto",
    marginTop: "1vw",
    borderRadius: 20,
    padding: "30px",
    //borderColor: '#C1E6FF',
    borderRadius: 10,
    boxShadow: "2px 2px 25px 1px #B3B3B3",
    broderWidth: 1,
    //borderStyle: 'solid',
    //borderColor:'red',

    //boxShadow: "3px 3px 10px 2px #576F72", //#576F72",
    //border: '1px solid red'
  },
  Button: {
    position: "relative",
    width: "100%",
    height: 40,
    backgroundColor: "#BC012E",
    color: "white",
    borderRadius: 15,
    border: "none",

    // marginTop:20,
  },

  SignupText: {
    textAlign: "center",
    color: "#022831",
    fontFamily: "Signika Negative",
    fontStyle: " sans-serif;",
    marginTop: 10,
    //border: '1px solid red'
  },
};

export default EditProfile;
