import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import image2 from "./assets/images/image_2.jpg";
import onlineLearning from "./assets/images/online-learning.png";
import graduated from "./assets/images/graduated.png";
import instructor from "./assets/images/instructor.png";
import tools from "./assets/images/computer.png";
import engImg from "./assets/images/learn_englsih.jpg";
import french from "./assets/images/french.jpg";
import programming from "./assets/images/programming.jpeg";
import network from "./assets/images/network.jpeg";
import seo from "./assets/images/seo.jpeg";

function Main() {
  return (
    <div>
      <div className="header">
        <Container>
          <Row>
            <Col>
              <div className="text-box">
                <p className="caption">WELCOME TO ACE EDUVILLE</p>
                <h1 className="heading">
                  We Are Online & Offline Platform For Learning
                </h1>
                <p className="text">
                  Excellence is not just a goal at Ace Eduville; it's a way of
                  life. We are committed to upholding the highest standards of
                  quality, integrity, and professionalism in everything we do.
                  From our meticulously curated content to our responsive
                  customer support, we strive for excellence in every aspect of
                  our platform.
                </p>

                <a href="./course" className="header-btn">
                  Explore Courses
                </a>
              </div>
            </Col>
            <Col>
              <div className="mail-box">
                <h3>Join Now</h3>

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

                  <button type="submit" class="btn btn-primary btn-lg">
                    Submit
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="mobile-mail-container">
        <div className="mobile-mail-box">
          <h3>Join Now</h3>

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

            <button type="submit" class="btn btn-primary btn-lg">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="section">
        <div>
          <p className="caption">START LEARNING TODAY</p>
          <h1>Pick Your Course</h1>
        </div>

        <div
          className="row container"
          style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}
        >
          <CardComponent
            img={image2}
            type="Software"
            title="Graphic Designing"
            text="3 Months"
            rating={4.5}
            halfStar={true}
          />
          <CardComponent
            img={french}
            type="Language"
            title="French"
            text="3 Months"
            rating={5}
          />
          <CardComponent
            img={programming}
            type="Programming"
            title="Learn JAVA Fundamentals"
            text="6 Months"
            rating={5}
          />
          <CardComponent
            img={network}
            type="IT/Tech"
            title="CCNA (Cisco Certified Network Associate)"
            text="3 Months"
            rating={5}
          />
          <CardComponent
            img={engImg}
            type="Language"
            title="Spoken English"
            text="3 Months"
            rating={5}
          />
          <CardComponent
            img={seo}
            type="Software"
            title="Digital Marketing"
            text="3 Months"
            rating={4.5}
            halfStar={true}
          />
        </div>
      </div>

      <div className="stats">
        <div className="overlay"></div>
        <div className="child">
          <span className="icon">
            <img src={onlineLearning} alt="online learning" />
          </span>
          <div className="text">
            <h3 data-number="400">15 +</h3>
            <p className="caption">ONLINE COURSES</p>
          </div>
        </div>
        <div className="child">
          <span className="icon">
            <img src={graduated} alt="graduated" />
          </span>
          <div className="text">
            <h3 data-number="4500">10,000 +</h3>
            <p className="caption">STUDENTS ENROLLED</p>
          </div>
        </div>
        <div className="child">
          <span className="icon">
            <img src={instructor} alt="instructor" />
          </span>
          <div className="text">
            <h3 data-number="1200">1000 +</h3>
            <p className="caption">EXPERTS INSTRUCTORS</p>
          </div>
        </div>
        <div className="child">
          <span className="icon">
            <img src={tools} alt="online content" />
          </span>
          <div className="text">
            <h3 data-number="300">500</h3>
            <p className="caption">HOURS CONTENT</p>
          </div>
        </div>
      </div>

      <div className="section-2">
        <Row>
          <Col sm={6} md={6} lg={6} xl={6}>
            <div className="img-box-2"></div>
            <div className="img-box-1"></div>
          </Col>
          <Col sm={6} md={6} lg={6} xl={6} className="about-desc">
            <div>
              <p className="caption">ENHANCED YOUR SKILLS</p>
              <h1>Learn Anything You Want Today</h1>
            </div>

            <p className="text-muted">
            Ace Eduville is an educational theme park located in subhash nagar new delhi. It is designed to provide an interactive and engaging learning experience for children and students, focusing on various subjects such as science, technology, engineering, arts, and mathematics (STEAM). The park features different attractions and exhibits that help children learn & develop professional skills in an enjoyable way. Ace Eduville aims to make learning enjoyable and memorable for young minds while promoting the importance of education.
            </p>

            <button className="btn btn-primary">Get in touch with us</button>
          </Col>
        </Row>
      </div>

      <div className="review">
        <div className="overlay-bg"></div>
        <Container>
          <div className="heading-box">
            <p className="caption">TESTIMONIAL</p>
            <h1>What Our Students Says</h1>
          </div>

          <div className="cards-desktop">
            <div
              className="container"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "center",
                margin: "2rem 1rem",
              }}
            >
              <div className="card">
                <div className="stars">
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                </div>
                <div className="text">
                  <p className="text-muted">
                    Thanks sir and ma'am for your motivation. I scored 8.0 bands{" "}
                    <br /> <br /> <br />{" "}
                  </p>
                </div>
                <div className="name">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6833/6833605.png"
                    alt="student"
                  />
                  <div className="box">
                    <h5>Sarabjeet Kaur</h5>
                    <p className="subtitle">Student</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="stars">
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                </div>
                <div className="text">
                  <p className="text-muted">
                    I have improved my communication skills in just one month
                    getting enrolled here which I did not get anywhere
                  </p>
                </div>
                <div className="name">
                  <img
                    src="https://www.eimt.ch/wp-content/uploads/2022/12/dummy-user.png"
                    alt="student"
                  />
                  <div className="box">
                    <h5>Shalu Kumar</h5>
                    <p className="subtitle">Student</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="stars">
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                </div>
                <div className="text">
                  <p className="text-muted">
                    Thanks for your motivation. <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
                <div className="name">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6833/6833605.png"
                    alt="student"
                  />
                  <div className="box">
                    <h5>Simran Kaur</h5>
                    <p className="subtitle">Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cards-mobile">
            <div className="container">
              <div className="card">
                <div className="stars">
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                </div>
                <div className="text">
                  <p className="text-muted">
                    Thanks sir and ma'am for your motivation. I scored 8.0 bands{" "}
                    <br /> <br /> <br />{" "}
                  </p>
                </div>
                <div className="name">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6833/6833605.png"
                    alt="student"
                  />
                  <div className="box">
                    <h5>Sarabjeet Kaur</h5>
                    <p className="subtitle">Student</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="stars">
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                </div>
                <div className="text">
                  <p className="text-muted">
                    I have improved my communication skills in just one month
                    getting enrolled here which I did not get anywhere
                  </p>
                </div>
                <div className="name">
                  <img
                    src="https://www.eimt.ch/wp-content/uploads/2022/12/dummy-user.png"
                    alt="student"
                  />
                  <div className="box">
                    <h5>Shalu Kumar</h5>
                    <p className="subtitle">Student</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="stars">
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star star"></i>
                  </span>
                </div>
                <div className="text">
                  <p className="text-muted">
                    Thanks for your motivation. <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
                <div className="name">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6833/6833605.png"
                    alt="student"
                  />
                  <div className="box">
                    <h5>Simran Kaur</h5>
                    <p className="subtitle">Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="banner">
        <div className="overlay-3"></div>
        <div className="text-container">
          <h3>WE ARE ACE EDUVILLE A LEARNING CENTER</h3>
          <p className="text-light">
            We can manage your dream of building a successful career
          </p>
          <button className="btn-primary btn btn-lg">Enroll Now</button>
        </div>
      </div>

      <div className="about-section container">
        <div className="box">
          <p className="subtitle">WELCOME TO ACE EDUVILLE</p>
          <h1>We Are Ace Eduville an Online & Offline Learning Center</h1>
        </div>

        <p className="text-muted">
        We are Ace Eduville, an online and offline educational center specializing in speech development. Our mission is to provide comprehensive learning experiences to help individuals improve their communication skills and enhance their overall self-expression.
        </p>

        {/* <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          illum ab sit mollitia, amet dolorum id vitae, esse quo error alias
          voluptatem. Est, eveniet eligendi? Aut quisquam eligendi itaque
          dolorem.
        </p> */}

        <div className="video-box">
          <a href="https://www.youtube.com/watch?v=L0U1Fr1FTyo" target="_blank">
            <i className="fa fa-play-circle"></i>
          </a>
          <h4>Learn anything from Ace Eduville, Watch video</h4>
        </div>
      </div>
    </div>
  );
}

export default Main;
