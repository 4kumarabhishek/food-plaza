import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
  // useContext --------------------------------
  const { user } = useContext(UserContext);
  return (
    <div className="footer">
      <div>
        <div className="footer-s">
          <div>
            <h3>Food Home</h3>
            <p>© 2024 Kumar Abhishek</p>
            <p>Pvt. Ltd</p>
          </div>
          <div className="social">
            <h3>Social Links</h3>
            <div>
              <i></i>
              <p>
                <a
                  href="https://www.linkedin.com/in/4kumarabhishek/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </p>
            </div>
            <div>
              <i></i>
              <p>
                <a href="https://github.com/4kumarabhishek" target="_blank">
                  GitHub
                </a>
              </p>
            </div>
            <div>
              <i></i>
              <p>
                <a
                  href="https://www.instagram.com/abhishek_roy4/"
                  target="_blank"
                >
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-s2">
          <h3>Company</h3>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Help</p>
          <p>Contact Us</p>
          <p>About</p>
          <p>Careers</p>
        </div>
      </div>
      <div>
        <h4>Created By Kumar Abhishek</h4>
        <h4>Email - 4kumar.abhishek@gmail.com</h4>
      </div>
    </div>
  );
};
export default Footer;
