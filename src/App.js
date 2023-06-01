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
function App() {
  return (
    <div className="App">
       <Header/>
        <Home/>
        <AboutUs/>
        <Opinions/>
        <PriseDevice/>
        <ScrollTop/>
    </div>
  );
}

export default App;
