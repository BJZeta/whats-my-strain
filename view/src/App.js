import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import LandingScreen from "./pages/LandingScreen";
import "./bootstrap.min.css";

function App() {
  return (
    <Router>
      <Container className="pt-5">
        <Route path="/" component={LandingScreen} exact />
      </Container>
    </Router>
  );
}

export default App;
