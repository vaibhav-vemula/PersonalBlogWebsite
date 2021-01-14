
import { Switch, Route, Redirect } from "react-router-dom";
import Blog1 from "./components/Blog1";
import Home from "./components/Home";


function App() {
  return (

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/blog1" component={Blog1} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
