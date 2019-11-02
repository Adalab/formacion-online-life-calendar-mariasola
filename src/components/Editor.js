import React from "react";
import { Link } from "react-router-dom";

class Editor extends React.Component {
  render() {
    const { catchInput, save } = this.props;
    return (
      <div className="form-container">
        <form action="">
          <div className="date-container form-container">
            <label htmlFor="date">Date</label>
            <input
              placeholder="23/10/1984"
              id="date"
              type="date"
              name="date"
              onChange={catchInput}
            />
          </div>
          <div className="state-container form-container">
            <label>State:</label>
            <div className="face-editor--container">
              <input
                id="happy-face"
                type="radio"
                value="happy"
                name="face"
                onChange={catchInput}
              />
              <label htmlFor="happy-face">:)</label>
              <input
                className="face-input"
                id="sad-face"
                type="radio"
                value="sad"
                name="face"
                onChange={catchInput}
              />
              <label htmlFor="sad-face">:(</label>
            </div>
          </div>
          <div className="message-container form-container">
            <label htmlFor="message">Message:</label>
            {this.props.state.face === "happy" ? (
              <textarea
                name="message"
                placeholder="¿Por qué es un buen día?"
                cols="30"
                rows="10"
                onChange={catchInput}
              ></textarea>
            ) : (
              <textarea
                disabled
                name="message"
                placeholder="How has your day been?"
                cols="30"
                rows="10"
                onChange={catchInput}
              ></textarea>
            )}
          </div>
        </form>
        <div className="save-container">
          <Link to="/">
            <button className="save-button" onClick={save}>
              Save
            </button>
          </Link>
        </div>
        <div className="cancel-container">
          <Link to="/" className="cancel-container-link">
            <p className="cancel-container-span">Cancel</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Editor;
