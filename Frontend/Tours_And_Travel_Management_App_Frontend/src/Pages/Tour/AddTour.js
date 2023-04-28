//import React from 'react'
import { useEffect, useState } from "react"
import TourServices from "../../Services/TourServices";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import $ from 'jquery';

const AddTour = () => {
    const [tourName, setTourName] = useState("");
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [activities, setActivities] = useState("");
    const [bookingAmount, setBookingAmount] = useState("");
    const [tourDetailInfo, setTourDetailInfo] = useState("");
    const [tourStartDate, setTourStartDate] = useState("");
    const [tourEndDate, setTourEndDate] = useState("");
    const [maxSeats, setMaxSeats] = useState("");
    const [transportationMode, setTransportationMode] = useState("");
    const [tourType, setTourType] = useState("");

    const saveTour = (e) => {
        e.preventDefault();
        const tour = { tourName, source, destination, tourStartDate, tourEndDate, maxSeats, transportationMode, activities, tourDetailInfo, bookingAmount, tourType }

        //create
        TourServices.createTour(tour)
            .then(response => {
                console.log("tour added successfully", response.data);
                toast.success("Tour Added successfully!")
                window.alert("Tour Added successfully!")

            })
            .catch(error => {
                toast.error("something went wrong !!!!")
                console.log('something went wrong', error);
            })

        $(document).ready(function () {
            $('input').each(function () {
                $(this).val('');
            });
        })
    }



    return (
        <div>
            <div className="container" style={{ position: "relative", background: `linear-gradient(to right, #D2DAFF ,#EFEFEF, #B1B2FF)`, height: "150vh", maxWidth: "100%" }} >
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <form onSubmit={saveTour}>
                            <div style={Styles.divStyle}>

                                <h2 style={Styles.tourText}><b>Add Tours</b></h2>

                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label" styles={{ marginTop: 10 }}>Tour name : </label>
                                    <input type="text" required className="form-control" id="exampleFormControlInput1" name="tourName" value={tourName}
                                        onChange={(e) => setTourName(e.target.value)}
                                    />
                                </div>

                                <div style={{ display: "flex" }}>
                                    <div className="mb-3" style={{ padding: "5px" }}>
                                        <label for="exampleFormControlInput1" className="form-label" styles={{ marginTop: 8 }}>Source : </label>
                                        <input type="text" required className="form-control" id="exampleFormControlInput1" name="source" value={source}
                                            onChange={(e) => setSource(e.target.value)} />
                                    </div>

                                    <div className="mb-3" style={{ padding: "5px" }}>
                                        <label for="exampleFormControlInput1" className="form-label" styles={{ marginTop: 8 }}>Destination : </label>
                                        <input type="text" required className="form-control" id="exampleFormControlInput1" name="destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
                                    </div>
                                </div>

                                <div style={{ display: "flex" }}>
                                    <div className="mb-3" style={{ padding: "5px" }}>
                                        <label for="exampleFormControlInput1" className="form-label" styles={{ marginTop: 8 }}>Start Date : </label>
                                        <input type="date" required className="form-control" id="exampleFormControlInput1" name="tourStartDate" value={tourStartDate} onChange={(e) => setTourStartDate(e.target.value)} />
                                    </div>

                                    <div className="mb-3" style={{ padding: "5px" }}>
                                        <label for="exampleFormControlInput1" className="form-label" styles={{ marginTop: 8 }}>End Date : </label>
                                        <input type="date" required className="form-control" id="exampleFormControlInput1" name="tourEndDate" value={tourEndDate} onChange={(e) => setTourEndDate(e.target.value)} />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label" styles={{ marginTop: 8 }}>Seats Available : </label>
                                    <input type="number" required className="form-control" id="exampleFormControlInput1" name="maxSeats" value={maxSeats} onChange={(e) => setMaxSeats(e.target.value)} />
                                </div>

                                <div style={{ display: "flex" }}>
                                    <label>Services</label> &nbsp;&nbsp;&nbsp;
                                    <select name='mode'
                                        value={transportationMode}
                                        onChange={(e) => setTransportationMode(e.target.value)} style={{ maxWidth: "200px" }}>

                                        <option>--Choose Transport--</option>
                                        <option>BUS</option>
                                        <option >TRAIN</option>
                                        <option>FLIGHT</option>
                                    </select>
                                </div>
                                <br></br>
                                <div style={{ display: "flex" }}>
                                    <label>Types</label> &nbsp;&nbsp;&nbsp;
                                    <select name='tourType' value={tourType}
                                        onChange={(e) => setTourType(e.target.value)} style={{ maxWidth: "200px" }}>

                                        <option>--Choose tour type--</option>
                                        <option>INTERNATIONAL</option>
                                        <option >DOMESTIC</option>
                                        <option>HOLIDAY</option>
                                        <option>ACTIVITIES</option>
                                    </select>
                                </div>

                                <div className="mb-3" style={{ padding: "5px" }}>
                                    <label for="exampleFormControlInput1" className="form-label" styles={{ marginTop: 8 }}>Activities : </label>
                                    <input type="text" required className="form-control" id="exampleFormControlInput1" name="activities" value={activities} onChange={(e) => setActivities(e.target.value)} />
                                </div>

                                <div className="mb-3" style={{ padding: "5px" }}>
                                    <label for="exampleFormControlInput1" className="form-label" styles={{ marginTop: 8 }}>Tour Details : </label>
                                    <input type="text" required className="form-control" id="exampleFormControlInput1" name="tourDetailInfo" value={tourDetailInfo} onChange={(e) => setTourDetailInfo(e.target.value)} />
                                </div>

                                <div className="mb-3" style={{ marginTop: "20px" }}>
                                    <label for="exampleFormControlInput1" className="form-label" styles={{ marginTop: 8 }}>Booking Amount : </label>
                                    <input type="number" required className="form-control" id="exampleFormControlInput1" name="bookingAmount" value={bookingAmount} onChange={(e) => setBookingAmount(e.target.value)} />
                                </div>


                                <div className='mb-3' style={{ marginTop: 20 }}>
                                    <button style={Styles.buttonStyle} type="submit" >Save</button>
                                </div>

                            </div></form>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    )

}

const Styles = {

    divStyle: {
        borderColor: "crimson",
        borderStyle: "thin",
        width: "30vw",
        margin: "auto",
        marginTop: 100,
        borderRadius: 18,
        padding: "20px",
        boxShadow: "3px 3px 10px 2px #576F72"
    },
    buttonStyle: {

        marginTop: 10,
        position: "relative",
        justifyContent: 'center', alignItems: 'center', height: '50vh',
        width: '100%',
        height: 40,
        backgroundColor: '#BC012E',
        color: 'white',
        borderRadius: 15,
        border: 'none',
    },
    tourText: {
        textAlign: "center",
        color: "#022831",
        fontFamily: 'Signika Negative',
        fontStyle: " sans-serif;",
        marginTop: 10,
    }


}

export default AddTour