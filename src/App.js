import React,{Component}from 'react'
import { BrowserRouter,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import contactus from './components/contactus';
import About from './components/About';
import Home from './components/Home';
class App extends Component {
  render() { 
    return (
     
      <BrowserRouter>
      <div>
      <Navbar />

      <Route exact path='/' component={Home} />
      <Route path='/contactus' component={contactus} />
      <Route path='/About' component={About} />
      </div>

      </BrowserRouter>
     );
  }
}
 
export default App;