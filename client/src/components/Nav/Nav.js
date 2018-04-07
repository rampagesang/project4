import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="navbar-brand text-success" href="/">Home</a>
        </li>
        <li>
          <a className="navbar-brand text-success" href="/Nominate">Nominate</a>
        </li>
        <li>
          <a className="navbar-brand text-success" href="/Nominated">This Month</a>
        </li>
        <li>
          <a className="navbar-brand text-success" href="/History">History</a>
        </li>
      </ul>

  </div>
</nav>
);

export default Nav;

// <div className="container-fluid">
//   <div className="navbar-nav">
//     <a href="/" className="navbar-brand">
//       Home
//         </a>
//     <a href="/nominate" className="navbar-brand">
//       Nominate a Student
//         </a>
//     <a href="/nominated" className="navbar-brand text-white">
//       Nominations for this Month
//         </a>
//   </div>
// </div>