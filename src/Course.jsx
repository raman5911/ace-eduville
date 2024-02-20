import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import CardComponent from "./CardComponent";
import image2 from "./assets/images/image_2.jpg";
import engImg from "./assets/images/learn_englsih.jpg";

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
      image: "https://cdn.pixabay.com/photo/2012/11/06/04/08/board-64271_1280.jpg",
      type: "Language",
      title: "French",
      text: "3 Months",
      rating: 5,
      halfStar: false,
    },
    {
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Programming",
      title: "Learn JAVA Fundamentals",
      text: "3 Months",
      rating: 5,
      halfStar: false,
    },
    {
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Programming",
      title: "Learn C++ Fundamentals",
      text: "3 Months",
      rating: 5,
      halfStar: false,
    },
    {
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Programming",
      title: "Learn Python Fundamentals",
      text: "3 Months",
      rating: 5,
      halfStar: false,
    },
    {
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "TECH/IT",
      title: "CCNA (Cisco Certified Network Associate)",
      text: "3 Months",
      rating: 5,
      halfStar: false,
    },
    {
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "TECH/IT",
      title: "Ethical Hacking",
      text: "3 Months",
      rating: 5,
      halfStar: false,
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "TECH/IT",
      title: "Computer Hardware & Networking",
      text: "3 Months",
      rating: 5,
      halfStar: false,
    },
    {
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "TECH/IT",
      title: "Artificial Intelligence",
      text: "3 Months",
      rating: 5,
      halfStar: false,
    },
    {
      image: "https://images.unsplash.com/photo-1658203897339-0b8c64a42fba?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "TECH/IT",
      title: "MS Excel",
      text: "3 Months",
      rating: 4.5,
      halfStar: false
    },
    {
      image: "https://images.unsplash.com/photo-1595245150898-339b88a9d477?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      image: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Software",
      title: "Digital Marketing",
      text: "3 Months",
      rating: 4.5,
      halfStar: true,
    },
    {
      image: "https://images.unsplash.com/photo-1665979738276-e41e815df1e1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Exam",
      title: "IELTS / TOEFL / PTE",
      text: "3 Months",
      rating: 5,
      halfStar: false
    },
    {
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Exam",
      title: "Govt Job Preperation",
      text: "3 Months",
      rating: 4.5,
      halfStar: true
    },
    {
      image: "https://images.unsplash.com/photo-1488722796624-0aa6f1bb6399?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Exam",
      title: "CUET Preperation",
      text: "3 Months",
      rating: 4.5,
      halfStar: true
    },
    {
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "Exam",
      title: "CA/CMA/CS Preperation",
      text: "3 Months",
      rating: 4.5,
      halfStar: true
    },
    {
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                  <label for="Programming">Exam</label>
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
