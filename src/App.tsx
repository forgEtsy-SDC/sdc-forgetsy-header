import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboveMainContent from "./components/AboveMainContent/AboveMainContent";

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Router>
        <Route
          path="/:productId"
          render={routeProps => {
            return <AboveMainContent {...routeProps} />;
          }}
        />
      </Router>
    );
  }
}

export default App;
