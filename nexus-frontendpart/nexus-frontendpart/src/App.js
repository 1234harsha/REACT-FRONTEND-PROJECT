import './App.css';
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import  About from "./components/about/About"

import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
// import Dashboard from './Admin/DashboardSidebarNav';


function App() {
  return (
    <div className="App">
       <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/team' component={Team} />
          {/* <Route exact path='/pricing' component={Pricing} /> */}
         
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
