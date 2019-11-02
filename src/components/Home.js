import React from "react";
import Header from "./Header";
import Calendar from "../containers/Calendar";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Calendar days={this.props.days} />
      </React.Fragment>
    );
  }
}

export default Home;
