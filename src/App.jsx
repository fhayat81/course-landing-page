import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseExplore from './components/CourseExplore';
import FacultyPage from './components/FacultyPage';
import Words from './components/Words';
import Footer from './components/Footer';
import Popup from './components/Popup';
import PopUpLog from './components/PopUpLog';
import AOS from 'aos';
import "aos/dist/aos.css";

const App = () => {

  const [popUp, setPopUp] = useState(false);
  const [popUpLog, setPopUpLog] = useState(false);

  const handlePopup = () => {
    setPopUp(!popUp);
  };

  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar setPopUp={setPopUp} setPopUpLog={setPopUpLog}/>
      <Hero setPopUp={setPopUp}/>
      <CourseExplore setPopUp={setPopUp}/>
      <FacultyPage/>
      <Words/>
      <Footer/>
      <Popup popUp={popUp} setPopUp={setPopUp}/>
      <PopUpLog popUpLog={popUpLog} setPopUpLog={setPopUpLog}/>
    </div>
  )
}

export default App;
