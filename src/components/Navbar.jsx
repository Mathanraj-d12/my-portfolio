// import React, { useState } from "react";


// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="logo">My Portfolio</div>

//         {/* Hamburger for mobile */}
//         <div className="menu-toggle" onClick={toggleMenu}>
//           ☰
//         </div>

//         <ul className={`nav-links ${menuOpen ? "active" : ""}`}
//             onMouseLeave={() => setMenuOpen(false)}>
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About us</a></li>
//           <li><a href="#projects">Projects</a></li>
//           <li><a href="#contact">Contact us</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">My Portfolio</div>

        {/* Hamburger for mobile */}
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}
            onMouseLeave={() => setMenuOpen(false)}>
          <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About us</a></li>
          <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact us</a></li>
          {/* <li><a href="#Skills" onClick={handleLinkClick}>Skills</a></li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
