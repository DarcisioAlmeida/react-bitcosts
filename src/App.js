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
  import ProjectDetails from './components/pages/projectDetails/ProjectDetails'

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/company" element={<Company/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/newproject" element={<NewProject/>}/>
          <Route path="/project/:id" element={<ProjectDetails/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
