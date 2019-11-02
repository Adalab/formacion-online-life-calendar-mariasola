import React from "react";

class Face extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      face: this.props.day.face
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.state.face === "happy" ? (
          <div className="happy-face">:)</div>
        ) : (
          <div className="sad-face">:(</div>
        )}
      </React.Fragment>
    );
  }
}

export default Face;
