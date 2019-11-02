import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Editor from "./components/Editor";
let count = 1;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [],
      date: "",
      message: "",
      face: ""
    };
  }
  componentDidMount() {
    this.verifyStorage();
  }

  verifyStorage = () => {
    if (localStorage.getItem("daysList")) {
      const dayList = JSON.parse(localStorage.getItem("daysList"));
      this.setState({
        days: dayList
      });
    }
  };

  catchInput = event => {
    const NAME = event.currentTarget.getAttribute("name");
    this.setState({ [NAME]: event.currentTarget.value });
  };

  createDays = () => {
    let day = {
      id: count,
      date: this.state.date,
      face: this.state.face,
      message: this.state.message
    };
    let days = this.state.days;
    days.push(day);
    this.setState({ days: days });
    count = count + 1;
    console.log(this.state);
    localStorage.setItem("daysList", JSON.stringify(this.state.days));
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home days={this.state.days} />}
          />
          <Route
            path="/config"
            render={() => (
              <Editor
                catchInput={this.catchInput}
                state={this.state}
                save={this.createDays}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
