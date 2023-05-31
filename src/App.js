import logo from './logo.svg';
import './App.css';
import Header from "./pages/header/header";
import "../src/assets/style/index.scss"
import Home from "./pages/home/home";
import AboutUs from "./pages/aboutUs/aboutUs";
import Opinions from "./pages/usersOpinions/opinions";
import PriseDevice from "./pages/priseDevice/priseDevice";

function App() {
  return (
    <div className="App">
       <Header/>
        <Home/>
        <AboutUs/>
        <Opinions/>
        <PriseDevice/>
    </div>
  );
}

export default App;
