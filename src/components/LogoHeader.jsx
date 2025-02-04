import Logo from "../assets/Logo.jsx";
import "./LogoHeader.css";
import "./nav.css";
export default function LogoHeader() {
  return (
    <div className="headerDiv">
      <div className="logoDiv">
        <Logo className="logo" />
      </div>
      <p className="brandName">BROO COFFEE ROASTERS</p>
    </div>
  );
}
