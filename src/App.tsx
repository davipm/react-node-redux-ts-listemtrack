import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";

import Header from "./components/Header";
import ExerciseList from "./components/ExerciseList";
import CreateUser from "./components/CreateUser";
import ExerciseCreate from "./components/ExerciseCreate";
import ExerciseEdit from "./components/ExerciseEdit";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" children={<ExerciseList />} />
          <Route path="/users" children={<CreateUser />} />
          <Route path="/create" children={<ExerciseCreate />} />
          <Route path="/exercise/update/:id" children={<ExerciseEdit />} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
