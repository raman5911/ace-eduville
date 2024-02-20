import './App.css';
import { Routes, Route } from 'react-router';
import About from './About';
import Course from './Course';
import Contact from './Contact';
import NavBar from './NavBar';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
