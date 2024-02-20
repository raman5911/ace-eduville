import React from "react";
import "./Footer.css";
import { Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className="container-fluid footer">
      <Row>
        <Col sm={12} md={12} lg={4} xl={4} className="col">
          <h4>About</h4>
          <p className="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            molestiae doloremque distinctio dolor officia ipsum libero fuga
            doloribus sequi pariatur!
          </p>

          <div className="social-icons-box">
            <a href="https://www.youtube.com/@ace_eduville_class/featured" target="_blank">
              <i className="fa fa-youtube-play"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100048496186667&mibextid=2JQ9oc" target="_blank">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/aceeduville" target="_blank">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4} className="col">
          <h4>Courses</h4>
          <ul className="text-light">
            <li>Govt Job Preperation</li>
            <li>Graphic Designing</li>
            <li>CUET Preperation</li>
            <li>French</li>
            <li>Spoken English</li>
            <li>Digital Marketing</li>
            <li>C++</li>
            <li>Java</li>
            <li>Python</li>
            <li>MS Excel</li>
            <li>CCNA Exam</li>
            <li>Computer Course</li>
            <li>CA/CMA/CS</li>
            <li>E-Accounting</li>
            <li>IELTS, TOEFL, PTE</li>
            <li>Ethical Hacking</li>
            <li>Computer Hardware & Networking</li>
            <li>Artificial Intelligence</li>
          </ul>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4} className="col">
          <h4>Have any Questions?</h4>
            <div className="flex-box">
                <i className="fa fa-map-marker"></i>
                <p>D-90, near Subhash nagar metro station, Ajay Enclave, Meenakshi Garden, Ashok Nagar, New Delhi, Delhi, 110018</p>
            </div>

            <div className="flex-box">
                <i className="fa fa-phone"></i>
                <p>+91 9599193444</p>
            </div>
            
            <div className="flex-box">
                <i className="fa fa-paper-plane"></i>
                <p>aceeduville@gmail.com</p>
            </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
