import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter"
import Dashboard from "../pages/Dashboard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Detail from "../pages/Detail";
import About from "../pages/About";
import NewBlog from "../pages/NewBlog";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="" element={<PrivateRouter />}>
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<NewBlog />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
