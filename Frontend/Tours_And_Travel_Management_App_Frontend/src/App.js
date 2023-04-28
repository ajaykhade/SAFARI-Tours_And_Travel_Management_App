import "./App.css";
import Navbar from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "./Pages/Home";
import { Feedback } from "./Pages/Feedback";
import { Contact } from "./Pages/Contact";
import { SignIn } from "./Pages/User/SignIn";
import { SignUp } from "./Pages/User/SignUp";
import UserProfile from "./Pages/User/UserProfile";
import EditProfile from "./Pages/User/EditProfile";
import Admin from "./Pages/Admin/admin";
import AddTour from "./Pages/Tour/AddTour";
import TourTable from "./Pages/Tour/TourTable";
import UpdateTour from "./Pages/Tour/UpdateTour";
import SearchTour from "./Pages/Tour/SearchTour";
import SearchByDestination from "./Pages/Tour/SearchByDestination";
import UserSearchTour from "./Pages/Tour/UserSearchTour";
import UserSearchByDestination from "./Pages/Tour/UserSearchByDestination";
import SearchByBudget from "./Pages/Tour/SearchByBudget";
import UserSearchByBudget from "./Pages/Tour/UserSearchByBudget";
import UserTourTable from "./Pages/Home/UserTourTable";
import AddTourist from "./Pages/Booking/AddTourist";
import GetBookedTours from "./Pages/User/GetBookedTours";
import GetAllBookedTours from "./Pages/Admin/GetAllBookedTours";
import GetFeedback from "./Pages/Admin/GetFeedback";

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          {/* common functionality */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/getFeedback" element={<GetFeedback />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />

          {/* user functionality */}
          <Route path="/userProfile" exact element={<UserProfile />} />
          <Route path="/editProfile" exact element={<EditProfile />} />
          <Route path="/userTourTable" element={<UserTourTable />} />
          <Route path="/add-tourists" element={<AddTourist />} />
          <Route path="/getBookedTours" element={<GetBookedTours />} />
          <Route path="/getByBudget" element={<UserSearchByBudget />} />
          <Route path="/gettours" element={<UserSearchTour />} />
          <Route path="/getbydestination/:destination" element={<UserSearchByDestination />} />

          {/* admin functionality */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/addTour" element={<AddTour />} />
          <Route path="/updateTour/:tourId" element={<UpdateTour />} />
          <Route path="/tourTable" element={<TourTable />} />
          <Route path="/search" element={<SearchTour />} />
          <Route path="/getallbookings" element={<GetAllBookedTours />} />
          <Route path="/searchbydestination/:destination" element={<SearchByDestination />} />
          <Route path="/searchByBudget" element={<SearchByBudget />} />
          
        </Routes>
        <ToastContainer position="top-center" autoClose={3000} />
      </Router>
    </>
  );
}

export default App;
