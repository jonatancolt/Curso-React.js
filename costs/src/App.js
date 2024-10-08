import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/layout/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from  './components/layout/Footer';
import Projects from './components/pages/Projects'
 
function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
    
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Projects" element={<Projects />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/newproject" element={<NewProject />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
