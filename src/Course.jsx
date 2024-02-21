import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import CardComponent from "./CardComponent";
import image2 from "./assets/images/image_2.jpg";
import engImg from "./assets/images/learn_englsih.jpg";
import french from "./assets/images/french.jpg";
import programming from "./assets/images/programming.jpeg";
import network from "./assets/images/network.jpeg";
import seo from "./assets/images/seo.jpeg";
import hacking from "./assets/images/hacking.jpeg";
import hardware from "./assets/images/hardware.jpeg";
import artificial_intelligence from "./assets/images/artificial intellignece.jpeg";
import excel from "./assets/images/excel.jpeg";
import basic_computer from "./assets/images/basic_computer.jpeg";
import exam from "./assets/images/exam.jpeg";
import govExam from "./assets/images/exam_gov.jpeg";
import cuet from "./assets/images/cuet.jpeg";
import accounts from "./assets/images/accounts.jpeg";

function Course() {
  const courses = [
    {
      image: image2,
      type: "Software",
      title: "Graphic Designing",
      text: "3 Months",
      rating: 4.5,
      halfStar: true,
    },
    {
      image: french,
      type: "Language",
      title: "French",
      text: "3 Months",
      rating: 5,
      halfStar: false,
    },
    {
      image: programming,
      type: "Programming",
      title: "Learn JAVA Fundamentals",
      text: "3 Months",
      rating: 5,
      halfStar: false,
    },
    {
      image: programming,
      type: "Programming",
      title: "Learn C++ Fundamentals",
      text: "3 Months",
      rating: 5,
      halfStar: false,
    },
    {
      image: programming,
      type: "Programming",
      title: "Learn Python Fundamentals",
      text: "3 Months",
      rating: 5,
      halfStar: false,
    },
    {
      image: network,
      type: "TECH/IT",
      title: "CCNA (Cisco Certified Network Associate)",
      text: "3 Months",
      rating: 5,
      halfStar: false,
    },
    {
      image: hacking,
      type: "TECH/IT",
      title: "Ethical Hacking",
      text: "3 Months",
      rating: 5,
      halfStar: false,
    },
    {
      image: hardware,
      type: "TECH/IT",
      title: "Computer Hardware & Networking",
      text: "3 Months",
      rating: 5,
      halfStar: false,
    },
    {
      image: artificial_intelligence,
      type: "TECH/IT",
      title: "Artificial Intelligence",
      text: "3 Months",
      rating: 5,
      halfStar: false,
    },
    {
      image: excel,
      type: "TECH/IT",
      title: "MS Excel",
      text: "3 Months",
      rating: 4.5,
      halfStar: false
    },
    {
      image: basic_computer,
      type: "TECH/IT",
      title: "Basic Computer Course",
      text: "3 Months",
      rating: 4.5,
      halfStar: false
    },
    {
      image: engImg,
      type: "Language",
      title: "Spoken English",
      text: "3 Months",
      rating: 5,
      halfStar: false,
    },
    {
      image: seo,
      type: "Software",
      title: "Digital Marketing",
      text: "3 Months",
      rating: 4.5,
      halfStar: true,
    },
    {
      image: exam,
      type: "Exam",
      title: "IELTS / TOEFL / PTE",
      text: "3 Months",
      rating: 5,
      halfStar: false
    },
    {
      image: govExam,
      type: "Exam",
      title: "Govt Job Preperation",
      text: "3 Months",
      rating: 4.5,
      halfStar: true
    },
    {
      image: cuet,
      type: "Exam",
      title: "CUET Preperation",
      text: "3 Months",
      rating: 4.5,
      halfStar: true
    },
    {
      image: accounts,
      type: "Exam",
      title: "CA/CMA/CS Preperation",
      text: "3 Months",
      rating: 4.5,
      halfStar: true
    },
    {
      image: accounts,
      type: "Exam",
      title: "E-Accounting Preperation",
      text: "3 Months",
      rating: 4.5,
      halfStar: true
    },
  ];

  const [softCheckbox, setSoftCheckbox] = useState(true);
  const [itCheckbox, setItCheckbox] = useState(true);
  const [langCheckbox, setLangCheckbox] = useState(true);
  const [progCheckbox, setProgCheckbox] = useState(true);
  const [examCheckbox, setExamCheckbox] = useState(true);

  const [filteredCourses, setFilteredCourses] = useState([courses]);
  const [selectedCategories, setSelectedCategories] = useState(["Software", "Language", "TECH/IT", "Programming", "Exam"]);

  const addCategory = (category) => {
    if (!selectedCategories.includes(category)) {                 // if category is not present then add it
      setSelectedCategories((prev) => [...prev, category]);
    }
  };

  const removeCategory = (category) => {
    if (selectedCategories.includes(category)) {                // if category is present
      const listAfterRemoving = selectedCategories.filter(      // filter all those items where category is not equal to input category (which has to be removed)
        (item) => item !== category
      );
      setSelectedCategories(listAfterRemoving);                 // update categorylist 
    }
  };

  useEffect(() => {
    if(filteredCourses.length == 0) {                           
      if(selectedCategories.length != 0) {                  // special case / edge case
        setFilteredCourses(courses.filter((item) => (selectedCategories.includes(item.type))));
      }
    }

    else {
      setFilteredCourses(courses.filter((item) => (selectedCategories.includes(item.type))));
    }
  }, [selectedCategories]);

  return (
    <div className="course">
      <header>
        <div className="overlay-bg-4"></div>
        <h1>Courses</h1>
      </header>

      <main>
        <div className="container-fluid box">
          <Row>
            <Col sm={12} md={12} lg={3} xl={3}>
              <div className="filter-box">
                <h4>Course Category</h4>

                <div className="input-group">
                  <input
                    type="checkbox"
                    name="Software"
                    id="Software"
                    checked={softCheckbox}
                    onChange={() => {
                      setSoftCheckbox(!softCheckbox);
                      if (selectedCategories.includes("Software")) {
                        removeCategory("Software");
                      } else {
                        addCategory("Software");
                      }
                    }}
                  />
                  <label for="Software">Software</label>
                  <br />
                </div>

                <div className="input-group">
                  <input
                    type="checkbox"
                    name="TECH/IT"
                    id="TECH/IT"
                    checked={itCheckbox}
                    onChange={() => {
                      setItCheckbox(!itCheckbox);
                      if (selectedCategories.includes("TECH/IT")) {
                        removeCategory("TECH/IT");
                      } else {
                        addCategory("TECH/IT");
                      }
                    }}
                  />
                  <label for="TECH/IT">TECH / IT</label>
                  <br />
                </div>

                <div className="input-group">
                  <input
                    type="checkbox"
                    name="Language"
                    id="Language"
                    checked={langCheckbox}
                    onChange={() => {
                      setLangCheckbox(!langCheckbox);
                      if (selectedCategories.includes("Language")) {
                        removeCategory("Language");
                      } else {
                        addCategory("Language");
                      }
                    }}
                  />
                  <label for="Language">Language</label>
                  <br />
                </div>

                <div className="input-group">
                  <input
                    type="checkbox"
                    name="Programming"
                    id="Programming"
                    checked={progCheckbox}
                    onChange={() => {
                      setProgCheckbox(!progCheckbox);
                      if (selectedCategories.includes("Programming")) {
                        removeCategory("Programming");
                      } else {
                        addCategory("Programming");
                      }
                    }}
                  />
                  <label for="Programming">Programming</label>
                  <br />
                </div>

                <div className="input-group">
                  <input
                    type="checkbox"
                    name="Exam"
                    id="Exam"
                    checked={examCheckbox}
                    onChange={() => {
                      setExamCheckbox(!examCheckbox);
                      if (selectedCategories.includes("Exam")) {
                        removeCategory("Exam");
                      } else {
                        addCategory("Exam");
                      }
                    }}
                  />
                  <label for="Exam">Exam</label>
                  <br />
                </div>
              </div>
            </Col>

            <Col sm={12} md={12} lg={9} xl={9}>
              <div className="row">
                {filteredCourses.map((course, i) => {
                  return (
                    <CardComponent
                      key={i}
                      img={course.image}
                      type={course.type}
                      title={course.title}
                      text={course.text}
                      rating={course.rating}
                      halfStar={course.halfStar}
                    />
                  );
                })}
              </div>
            </Col>
          </Row>
        </div>
      </main>
    </div>
  );
}

export default Course;
