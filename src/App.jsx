import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Favorite from "./Pages/Favorite";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Register from "./Pages/Register";
import SignIn from "./Pages/SignIn";
import SingleEstate from "./Pages/SingleEstate";
import CompanyProfile from "./Pages/CompanyProfile";
import ProtectedRoute from "./Components/ProtectedRoute";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute/>}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/single-estate" element={<SingleEstate />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
