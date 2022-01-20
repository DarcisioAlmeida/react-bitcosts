
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
/* Import Layout */
  import Container from './components/layout/container/Container'
  import Navbar from './components/layout/navbar/Navbar'
  import Footer from './components/layout/footer/Footer'

/* Import Pages */
  import Company from './components/pages/company/Company'
  import Contact from './components/pages/contact/Contact'
  import Home from './components/pages/home/Home'
  import NewProject from './components/pages/newProject/NewProject'
  import Projects from './components/pages/projects/Projects'

function App() {
  return (
    <Router>
      <Navbar/>
        <Container customClass="min-height">
      <Routes>
        
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
          <Route exact path="/company" element={<Company/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/newproject" element={<NewProject/>}/>
        
      </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
