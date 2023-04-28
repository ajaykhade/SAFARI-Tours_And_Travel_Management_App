import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import FeedBackService from "../Services/FeedBackService";

export const Feedback = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');

    const send = () => {

        if (firstName.length === 0) {
            toast.error('please enter name')
        }
        else if (email.length === 0) {
            toast.error('please enter email')
        }

        else if (rating.length === 0) {
            toast.error('please give rating')
        }
        else if (comment.length === 0) {
            toast.error('please enter comment')
        }

        else {

            const feedback = { firstName, email, rating, comment }
            let userId = sessionStorage.getItem("userId");
            //create
            FeedBackService.createFeedback(feedback, userId)
                .then(response => {
                    console.log("feedback added successfully", response.data);
                    toast.success("feedback Added successfully!")
                    window.alert("feedback Added successfully!")

                })
                .catch(error => {
                    toast.error("something went wrong !!!!")
                    console.log('something went wrong', error);
                })
        }

    }

    return (
        <div style={{ background: `linear-gradient(to right, #D7FFFD ,#EFEFEF, #EFA8E4)`, height: "100vh" }}>
            <br /><br />
            <div style={Styles.divStyle}>
                <h2 style={Styles.feedbackText}><b>Feedback</b></h2>

                <div className="mb-3">
                    <label for="firstName" className="form-label" styles={{ marginTop: 10 }}>Full name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="Enter your first name"
                        onChange={(event) => {
                            setFirstName(event.target.value)
                        }} />
                </div>

                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com"
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }} />
                </div>

                <div class="form-floating" style={{ width: '15vw' }}>
                    <select class="form-select" id="rating" aria-label="Floating label select example" style={{ height: '9vh' }}
                        value={rating}
                        onChange={(event) => {
                            setRating(event.target.value)
                        }}>
                        <option selected>Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <label for="floatingSelect">Tell us your experience</label>
                </div>

                <div className="mb-3" style={{ paddingTop: 10 }}>
                    <label for="comment" className="form-label">Comments</label>
                    <textarea className="form-control" id="comment" rows="1"
                        onChange={(event) => {
                            setComment(event.target.value)
                        }}> </textarea>
                </div>

                <div>
                    <button onClick={send} style={Styles.buttonStyle} >Send</button>
                </div>

            </div>
        </div>
    );
}

const Styles = {

    divStyle: {
        borderColor: "crimson",
        borderStyle: "thin",
        width: 400,
        margin: "auto",
        marginTop: "10vh",
        borderRadius: 20,
        padding: "15px",
        boxShadow: "3px 3px 10px 2px #576F72",
        backgroundColor: "white"
        // backgroundColor:"#F0EBE3"
    },
    feedbackText: {
        textAlign: "center",
        color: "#022831",
        fontFamily: 'Signika Negative',
        fontStyle: " sans-serif;",
        marginTop: 8,
    },
    buttonStyle: {

        marginTop: 5,
        position: "relative",
        justifyContent: 'center', alignItems: 'center', height: '50vh',
        width: '70%',
        height: 40,
        backgroundColor: '#BC012E',
        color: 'white',
        borderRadius: 15,
        border: 'none',
        marginLeft: 53
    }


}

