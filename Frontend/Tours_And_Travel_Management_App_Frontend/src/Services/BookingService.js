import axios from "axios";

const userURL = "http://localhost:9090/safari";

class BookingService {

    getAllBookings = () => {
        // const tok=sessionStorage.getItem("token");
        // console.log(tok);
        // axios.defaults.headers.common={Authorization:`Bearer ${tok}`};
        return axios.get(userURL + '/booking/getallbookings/')
    }

    getAllBookingByUserId = (userId) => {
        // const tok=sessionStorage.getItem("token");
        // console.log(tok);
        // axios.defaults.headers.common={Authorization:`Bearer ${tok}`};
        return axios.get(userURL + '/booking/getAllbyuserId/' + userId)
    }

    deleteBooking = (bookingId) => {
        // const tok=sessionStorage.getItem("token");
        // console.log(tok);
        // axios.defaults.headers.common={Authorization:`Bearer ${tok}`};
        return axios.delete(userURL + '/booking/delete/' + bookingId)
    }

    getAllTouristByBookingId = (bookingId) => {
        // const tok=sessionStorage.getItem("token");
        // console.log(tok);
        // axios.defaults.headers.common={Authorization:`Bearer ${tok}`};
        return axios.get(userURL + '/tourist/getAllTouristByBookingId/' + bookingId)
    }
}
export default new BookingService();