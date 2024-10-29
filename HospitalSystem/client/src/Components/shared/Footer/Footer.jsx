import logo from "./../../../assets/images/logo.png";
import { faHouseChimney, faPhone, faEnvelope, faGlobe, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className="w-100 d-flex flex-column justify-content-center align-items-center pt-5 px-5">
      <div className="row container-fluid justify-content-around">
        <div className="col-xl-3 col-12 text-center text-xl-start">
          <h4 className="fw-bold pb-2">Contact Info</h4>
          <p>
            Rapidiously seize wireless strategic theme areas and corporate testing procedures. Uniquely
          </p>
          <p>
            <FontAwesomeIcon icon={faHouseChimney} className="pe-2 text-primary" />
            Suite 02 New Elephant Road USA
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="pe-2 text-primary" />
            +880 142 258 123, 02-96936
          </p>
          <p className="fw-semibold">
            <FontAwesomeIcon icon={faEnvelope} className="pe-2 text-primary" />
            info@mukti.com
          </p>
          <p className="fw-semibold">
            <FontAwesomeIcon icon={faGlobe} className="pe-2 text-primary" />
            info@mukti.com
          </p>
        </div>
        <div className="col-xl-5 col-12 d-flex flex-column justify-content-center align-items-center text-center">
          <div>
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <p className="text-center pt-3">
            Proactive predominate empowered portals viaine robust infrastructurs Convenen simp scalable ntatves rather thanineri manetic action items Proactively predominate empowered portals robust
          </p>
          <h4 className="pt-1 pb-3 fw-bold">Subscribe Our Newsletter</h4>
          <div className="input-group mb-3">
            <span className={`${styles.inputText} input-group-text`}>
              <FontAwesomeIcon icon={faPaperPlane} className="text-primary" />
            </span>
            <input
              type="text"
              className={`${styles.border} form-control border-opacity-10`}
              placeholder="Enter Your Email"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className={`${styles.subscribe} btn btn-primary fw-bold px-4 py-3`}
              type="button"
              id="button-addon2"
            >
              Subscribe Now
            </button>
          </div>
        </div>
        <div className="col-xl-3 col-12 text-center text-lg-start">
          <h4 className="fw-bold pb-3 text-center text-xl-start">Opening Hours</h4>
          <div className="d-flex justify-content-between">
            <div>
              <p>Saturday</p>
              <p>Sunday</p>
              <p>Monday</p>
              <p>Tuesday</p>
              <p>Wednesday</p>
              <p>Thursday</p>
            </div>
            <div className="text-end">
              <p>8:00 am - 10:00 pm</p>
              <p>6:00 am - 8:00 pm</p>
              <p>6:00 am - 2:00 pm</p>
              <p>7:00 am - 9:00 pm</p>
              <p>10:00 am - 12:00 pm</p>
              <p>2:00 am - 6:00 pm</p>
            </div>
          </div>
        </div>
        <hr className="w-100 text-light-emphasis mt-5" />
      </div>
      <p>
        Copyright &copy; 2021 <span className="text-primary">Mukti</span>. All Rights Reserved. By{" "}
        <span className="fw-bold text-black">LabArtisan</span>
      </p>
    </footer>
  );
};

export default Footer;
