import React from "react";

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand fw-bold" href="#">
              Self Cart
            </a>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
