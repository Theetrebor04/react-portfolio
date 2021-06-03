import {BrowserRouter, Route, Switch} from "react-router-dom";

// Components
import Homepage from "./components/Homepage";
import Menu from "./components/Menu";
import Contacts from "./pages/Contacts";
import Error from "./pages/Error";

// Pages
import Projects from "./pages/Projects";


const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact-me">
          <Contacts />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
