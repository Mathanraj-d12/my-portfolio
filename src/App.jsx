// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import About from "./components/About";
// import Footer from "./components/Footer";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  return(
    <>
    <Navbar/>
    <Hero />
    <About />
    <Projects />
    <Contact />
    {/* <Footer/> */}
    <Skills/>
    </>
  );
}

export default App;


// // server.js or index.js
// import express from "express";
// import cors from "cors";
// import nodemailer from "nodemailer";

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post("/send", async (req, res) => {
//   const { name, email, message } = req.body;

//   // Configure Nodemailer
//   const transporter = nodemailer.createTransport({
//     service: "gmail", // or your email provider
//     auth: {
//       user: "mathanraj212@gmail.com",
//       pass: "Math@9898",
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: "mathanrajd12@gmail.com",
//     subject: `Portfolio Contact Form: ${name}`,
//     text: message,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: "Email sent successfully!" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to send email." });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
