import React, { useState } from 'react'
//import './css/addPassenger.css'
import { useLocation, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
//import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom';



const AddTourist = () => {
	const location = useLocation();
	let seats = location.state.seat;

	const [count, setCount] = useState(1)
	const [seat, setSeat] = useState(seats)

	const user = sessionStorage.getItem("userId");
	console.log(user)

	const navigate = useNavigate()

	//const {id}=useParams();

	let tourId = location.state.select;
	let tourAmount = location.state.amt;


	//let selectedTrain = location.state.select;


	var currentDate = new Date();

	console.log("date: " + currentDate)

	var date = currentDate.getDate();
	console.log("date: " + date)

	var month = currentDate.getMonth();
	console.log("month: " + month)

	var year = currentDate.getFullYear();
	console.log("year: " + year)

	if (date < 10) {
		if (month < 9) {

			var today = year + "-0" + (month + 1) + "-0" + date;
		}
		else {
			var today = year + "-" + (month + 1) + "-0" + date;

		}
	}

	else {
		if (month < 9)
			var today = year + "-0" + (month + 1) + "-" + date;

		else {
			var today = year + "-" + (month + 1) + "-" + date;
		}
	}

	const [formValues, setFormValues] = useState([
		{ touristName: '', age: '', idProof: '', idProofNo: '' },
	])

	let handleChange = (i, e) => {
		let newFormValues = [...formValues]
		newFormValues[i][e.target.name] = e.target.value
		setFormValues(newFormValues)
	}

	let addFormFields = () => {
		setFormValues([
			...formValues,
			{ touristName: '', age: '', idProof: '', idProofNo: '' },
		])
		setCount(count + 1)
		if (seat != 0)
			setSeat(seat - 1);
	}

	let removeFormFields = (i) => {
		let newFormValues = [...formValues]
		newFormValues.splice(i, 1)
		setFormValues(newFormValues)
		setCount(count - 1)
		setSeat(seat + 1);
	}

	let handleSubmit = (event) => {
		event.preventDefault()
		//alert(JSON.stringify(formValues))
		if (formValues.touristName === '')
			// alert("please enter name");
			console.log(JSON.stringify(requestObject))
		axios
			.post('http://localhost:9090/safari/booking/createBooking/tour/' + tourId + '/user/' + user, requestObject)
			//.post('http://localhost:9090/api/book/user/2/train/' + selectedTrain + '/addBooking/', requestObject)
			//.post('http://localhost:9090/api/passenger/addPassenger', formValues)
			.then((response) => {
				// get the data returned by server
				const result = response.data

				// check if user's authentication is successfull
				if (result['status'] === 'error') {
					toast.error('Something went wrong. Please check')
				} else {

					console.log(result)
					swal("Success", "Tour Booked Successfully\n Booking ID : " + result.bookingId + "", "success");

					//navigate('/userTourTable')
				}
			})
			.catch((error) => {
				console.log('error')
				console.log(error)
			})

	}

	const requestObject = {
		"bookingDto": {
			"bookingDate": today,
			"totalAmount": tourAmount * count,
			"paymentStatus": "PAYMENT_SUCCESSFUL",
			"seatCount": count
		},
		"touristDtoList": formValues
	}


	return (
		<div style={{ background: `linear-gradient(to right, #B4AEE8 ,#EFEFEF, #93329E)`, height: "1000px" }}>
			<div className="text-center" style={{ padding: "20px", fontFamily: "Georgia, serif" }}><h2><b>Add Tourists Here..</b></h2></div>
			<div className="text-center" style={{ padding: "10px" }}><h4>No of Tourists = {count}</h4></div>
			<div className="text-center" style={{ padding: "10px" }}><h4>No of Seats Available = {seat - 1}</h4></div>
			<br />
			<form onSubmit={handleSubmit}>
				{formValues.map((element, index) => (
					<div className='form-inline' key={index} style={divStyle.div}>
						<label><b>Name</b></label>&nbsp;&nbsp;&nbsp;
						<input
							type='text'
							name='touristName'
							value={element.touristName || ''} required
							onChange={(e) => handleChange(index, e)}

						/>&nbsp;&nbsp;&nbsp;&nbsp;

						<label><b>Age</b></label>&nbsp;&nbsp;&nbsp;
						<input
							type='number'
							name='age'
							value={element.age || ''}
							onChange={(e) => handleChange(index, e)}
						/>&nbsp;&nbsp;&nbsp;&nbsp;

						<label><b>ID Proof</b></label> &nbsp;&nbsp;&nbsp;
						<select name='idProof'
							value={element.idProof}
							onChange={(e) => handleChange(index, e)} style={{ width: "200px" }}>

							<option>--please Choose ID--</option>
							<option>AADHAR_CARD</option>
							<option >DRIVING_LICENSE</option>
							<option>PAN_CARD</option>
						</select>&nbsp;&nbsp;&nbsp;&nbsp;

						<label><b>ID Number</b></label>&nbsp;&nbsp;&nbsp;
						<input
							type='text'
							name='idProofNo'
							value={element.idProofNo || ''}
							onChange={(e) => handleChange(index, e)}
						/>

						{index ? (
							<button
								type='button'
								className='btn btn-danger'
								onClick={() => removeFormFields(index)} style={{ marginLeft: "2vw" }}>
								Remove
							</button>
						) : null}
					</div>
				))}
				<br />
				<div className='button-section ' style={{ marginLeft: "40vw" }}>
					<button
						className='btn btn-primary'
						type='button'
						onClick={() => addFormFields()}
						style={buttonStyle.button}
					>
						<h5>Add</h5>
					</button>
					<Link
						className='btn btn-primary'

						onClick={(e) => handleSubmit(e)}
						style={buttonStyle.button}
						state={{ select1: count }}
						to={`/userTourTable`}>
						<h5>Book</h5>
					</Link>
				</div>
			</form>
			<br /><br />
			<div className="text-center" style={{ padding: "10px" }}><h4>Total Amount = {tourAmount * count}</h4></div>
		</div>
	)
}
const styles = {
	container: {
		padding: 40,
		marginTop: 60,
		backgroundColor: "#B1B2FF"
	},
}

const divStyle = {
	div: {
		height: "9vh",
		width: "90%",
		boxShadow: "1px 0px 4px 3px #DBDBDB",
		borderRadius: "10px",
		padding: "20px",
		marginLeft: "10vw",
		backgroundColor: "#FCF6F5FF"
	},
}

const buttonStyle = {
	button: {
		marginRight: "25px",
		width: "100px",
		padding: "7px",
		borderRadius: "10px"
	},
}


export default AddTourist