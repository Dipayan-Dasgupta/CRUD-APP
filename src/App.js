
import NavBar from './components/Navbar';
import Alluser from './components/Alluser';
import Adduser from './components/Adduser';
import Portfolio from './components/portfolio';
import Invalid from './components/Invalid';
import EditUser from './components/edituser';
import {BrowserRouter,Route , Switch } from 'react-router-dom' ;
function App() {
  return (
    <BrowserRouter>
     <NavBar />
     <Switch>
     <Route exact path="/" component = {Portfolio} />
     <Route exact path="/all" component = {Alluser} />
     <Route exact path="/add" component = {Adduser} />
     <Route exact path = "/edit/:id" component = {EditUser} />
     <Route component = {Invalid} />
     </Switch>
    </BrowserRouter>
  );
}

export default App;
