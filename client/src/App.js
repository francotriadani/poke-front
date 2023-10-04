import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import NavBar from './Components/NavBar';
import {Landing, Home, Form, Detail} from "./Views/index"
import { Route } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar/>}
      <Route exact path="/" component={Landing}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/form" component={Form}/>
      <Route exact path="/detail/:id" component={Detail}/>
    </div>
  );
}

export default App;
