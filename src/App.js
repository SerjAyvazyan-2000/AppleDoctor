import logo from './logo.svg';
import './App.css';
import Header from "./pages/header/header";
import "../src/assets/style/index.scss"
import Home from "./pages/home/home";
import AboutUs from "./pages/aboutUs/aboutUs";
import Opinions from "./pages/usersOpinions/opinions";
import PriseDevice from "./pages/priseDevice/priseDevice";
import ScrollTop from "./components/scrollTop/scrollTop";
import "../src/assets/fonts/style.css"
import Contact from "./pages/contact/contact";

function App() {
  return (
    <div className="App ">
        <Home/>
        <AboutUs/>
        <Opinions/>
        <PriseDevice/>
        <ScrollTop/>
        <Contact/>
    </div>
  );
}

export default App;
