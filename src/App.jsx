import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Why from "./components/Why";
import Cards from "./components/cards/Cards";
import Feedback from "./components/feedback/Feedback";
import Cartpop from "./components/ecartshop/Cartpop";
import FunduAvatar from "./assets/fundu-avatar.svg";
import { BrowserRouter, Routes, Route } from "react-router";
import Queslisting from "./components/quesans/Queslisting";
import Mainques from "./components/quesans/Mainques";
import Mainans from "./components/quesans/Mainans";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="funduAvatar">
                  <img src={FunduAvatar} alt="" />
                </div>
                <Banner />
                <Cards />
                <Why />
                <Feedback />
              </>
            }
          />

          <Route path="/queslisting" element={<Queslisting />} />
          <Route path="/mainques" element={<Mainques />} />
          <Route path="/mainans" element={<Mainans />} />
        </Routes>

        <Footer />
        <Cartpop />
      </BrowserRouter>
    </>
  );
}

export default App;
