import beanVideo from "./assets/coffee_beans_video.mp4";
import section1 from "./assets/section1.jpg";
import "./video.css";
import "./home.css";
import "./components/nav.css";
import "./components/LogoHeader.css";
import Header from "./components/LogoHeader";
import { Link } from "react-router-dom";
import Menu from "./components/Nav";

export default function Home() {
  return (
    <div className="container">
      <Header />
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

          <div className="scrollDiv">
            <a className="mainScroll" href="#">
              <div className="mainScrollBox">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M11.9997 13.1716L7.04996 8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </div>
              <span className="mainScrollText">Explore</span>
            </a>
          </div>
        </div>

        <section>
          <img
            className="section1"
            src={section1}
            alt="section 1" // Always include alt text for accessibility
          />
          <p className="sectionHeading">Lorem Ipsum</p>
          <p className="sectionBody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </div>
    </div>
  );
}
