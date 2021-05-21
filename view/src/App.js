import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import LandingScreen from "./pages/LandingScreen";
import QuestionScreen from "./pages/QuestionScreen";
import "./bootstrap.min.css";

function App() {
  return (
    <Router>
      <Container className="pt-5">
        <Route path="/" component={LandingScreen} exact />
        <Route path="/questions" component={QuestionScreen} />
      </Container>
    </Router>
  );
}

export default App;
