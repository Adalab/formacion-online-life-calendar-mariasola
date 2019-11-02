import React from "react";
import Face from "../components/Face";

class Calendar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul className="calendar-grid">
          {this.props.days.map(day => {
            return (
              <li className="face-container" key={day.id}>
                <Face day={day} />
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default Calendar;
