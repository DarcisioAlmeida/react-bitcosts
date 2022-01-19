
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
/* Import Layout */
  import Container from './components/layout/container/Container'

/* Import Pages */
  import Company from './components/pages/company/Company'
  import Contact from './components/pages/contact/Contact'
  import Home from './components/pages/home/Home'
  import NewProject from './components/pages/newproject/NewProject'

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </div>

      <Routes>
        <Container>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/company"><Company/></Route>
          <Route exact path="/contact"><Contact/></Route>
          <Route exact path="/newproject"><NewProject/></Route>
        </Container>
      </Routes>
    </Router>
  );
}

export default App;
