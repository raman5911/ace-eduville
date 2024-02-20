import React from "react";
import { Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <div className="contact-us">
      <header>
        <div className="overlay-bg-4"></div>
        <h1>Contact Us</h1>
      </header>

      <main>
        <div className="container contact-box">
          <Row className="outer-box">
            <Col className="info" xs={12} sm={12} md={6} lg={4} >
              <h3>Let's get in touch</h3>
              <p className="text-light">
                We're open for any suggestion or just to have a chat
              </p>

              <div className="flex-box">
                <i className="fa fa-map-marker"></i>
                <p>
                  Address: D-90, near Subhash nagar metro station, Ajay Enclave,
                  Meenakshi Garden, Ashok Nagar, New Delhi, Delhi, 110018
                </p>
              </div>

              <div className="flex-box">
                <i className="fa fa-phone"></i>
                <p>Phone: +91 9599193444</p>
              </div>

              <div className="flex-box">
                <i className="fa fa-paper-plane"></i>
                <p>Email: aceeduville@gmail.com</p>
              </div>

              <div className="flex-box">
                <i className="fa fa-globe"></i>
                <p>Website: aceeduville.com</p>
              </div>
            </Col>
            <Col className="form-box" xs={12} sm={12} md={6} lg={8}>
              <h3>Get in touch</h3>
              <form
                  action="mailto:aceeduville@gmail.com"
                  method="post"
                  enctype="text/plain"
                >
                  <div class="mb-3">
                    <label for="inputName" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="inputName"
                      class="form-control"
                      placeholder="Enter Name of your Child"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <label for="inputMobile" class="form-label">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="inputMobile"
                      class="form-control"
                      placeholder="Enter your Mobile Number"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <label for="inputEmail" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="inputEmail"
                      class="form-control"
                      id="inputEmail"
                      placeholder="Enter your Email Address"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <label for="inputState" class="form-label">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      id="inputState"
                      class="form-control"
                      placeholder="Enter your State"
                      required
                    />
                  </div>

                  <button type="submit" class="btn btn-primary btn">
                    Send Message
                  </button>
                </form>              
            </Col>
          </Row>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7418652862784!2d77.10191897515561!3d28.637497675662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0358b93022b7%3A0xdec1ed28b8520011!2sACE%20Eduville!5e0!3m2!1sen!2sin!4v1707814456360!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="map-box"></iframe>
        </div>
      </main>
    </div>
  );
}

export default Contact;
