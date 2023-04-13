import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Detail from "../pages/Detail";
import About from "../pages/About";
import NewBlog from "../pages/NewBlog";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import UpdateModal from "../components/blog/UpdateModal";
import DeleteModal from "../components/blog/DeleteModal";

const AppRouter = ({ theme, setTheme }) => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route
          path="/"
          element={<Dashboard theme={theme} setTheme={setTheme} />}
        />

        <Route path="" element={<PrivateRouter />}>
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="new-blog" element={<NewBlog />} />
          <Route path="profile" element={<Profile />}>
            <Route index path="update" element={<UpdateModal />} />
            <Route path="delete" element={<DeleteModal />} />
            <Route />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
