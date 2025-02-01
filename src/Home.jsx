import beanVideo from "./assets/coffee_beans_video.mp4";
import "./video.css";
import "./home.css";
import "./components/NavBar.css";
import { Link } from "react-router-dom";
import Menu from "./components/Nav";

export default function Home() {
  return (
    <div className="container">
      <Menu />
      <div className="main">
        <div className="banner">
          <video className="coffeeBeans" autoPlay loop muted>
            <source src={beanVideo} type="video/mp4"></source>
          </video>
          <div className="bannerElem">
            <div className="bannerText">
              Start your coffee journey with BROO
            </div>
            <p className="bannerCaption">
              Crafting moments, one bean at a time.
            </p>
            <Link to="/shop" className="bannerBtn" role="button">
              <span>Shop Beans</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
