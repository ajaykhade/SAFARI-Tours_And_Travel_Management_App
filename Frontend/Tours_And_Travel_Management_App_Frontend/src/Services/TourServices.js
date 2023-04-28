import axios from "axios"

const tour_URL = "http://localhost:9090/safari/tourdetails";

class TourService {

  getAllTours() {
    // const tok=sessionStorage.getItem("token");
    // console.log(tok);
    // axios.defaults.headers.common={Authorization:`Bearer ${tok}`};
    return axios.get(tour_URL + '/getall');
  }

  createTour(tour) {
    // const tok=sessionStorage.getItem("token");
    // console.log(tok);
    // axios.defaults.headers.common={Authorization:`Bearer ${tok}`};
    return axios.post(tour_URL + '/create', tour)
  }

  getTourById = (tourId) => {
    console.log(tour_URL + '/get/' + tourId)
    return axios.get(tour_URL + '/get/' + tourId);
  };

  updateTour = (tour, tourId) => {
    const tok = sessionStorage.getItem("token");
    console.log(tok);
    axios.defaults.headers.common = { Authorization: `Bearer ${tok}` };
    console.log(tour_URL + tourId)
    return axios.put(tour_URL + '/update/' + tourId, tour);
  };

  removeTour = (tourId) => {
    console.log(tour_URL + tourId)
    return axios.delete(tour_URL + '/delete/' + tourId);
  };

  getBookings = (tourId) => {
    console.log(tourId)
    return axios.get(tour_URL + tourId + '/booking')
  }

  getByDestination = (destination) => {
    console.log(destination)
    return axios.get(tour_URL + '/getbydestination/' + destination)
  }

  getByBudget = () => {
    console.log('searchByBudget')
    return axios.get(tour_URL + '/getbybudget')
  }
}
export default new TourService();