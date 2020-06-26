import React from 'react'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import ProjectCard from './components/card'
import './App.css'
import { Row } from 'reactstrap'

const projectArray = [
  {
    title: "Project One - Little Gems",
    subtitle: "Helping people find small restaurants near them.",
    text:
      "Coding bootcamps first project learning how to make a javascript based website.",
    link: "https://erikapaige.github.io/LittleGems/",
    linkText: "See Project One",
    githubLink: "https://github.com/erikapaige/LittleGems",
  },
  {
    title: "Project two - ArtistaDay",
    subtitle: "Showing a new artist every day.",
    text:
      "Coding bootcamps second project making a full-stack website with a NodeJS and MySQL.",
    link: "https://hidden-inlet-64215.herokuapp.com/",
    linkText: "See Project Two",
    githubLink: "https://github.com/usrs/ArtistaDay",
  },
  {
    title: "Project Three - Grocery Tracker",
    subtitle: "A class assignment tracking groceries in a mongoDB database.",
    text: "A class assignment tracking groceries in a mongoDB database.",
    link: "https://infinite-hamlet-82831.herokuapp.com/",
    linkText: "See Project Three",
  },
  // {
  //   title: "Project Four - ",
  //   subtitle: "Helping people find small restaurants near them.",
  //   text:
  //     "Coding bootcamps first project learning how to make a javascript based website.",
  //   link: "https://erikapaige.github.io/LittleGems/",
  //   linkText: "See Project Four",
  // },
  // {
  //   title: "Project Five - ",
  //   subtitle: "Helping people find small restaurants near them.",
  //   text:
  //     "Coding bootcamps first project learning how to make a javascript based website.",
  //   link: "https://erikapaige.github.io/LittleGems/",
  //   linkText: "See Project Five",
  // },
  // {
  //   title: "Project Six - ",
  //   subtitle: "Helping people find small restaurants near them.",
  //   text:
  //     "Coding bootcamps first project learning how to make a javascript based website.",
  //   link: "https://erikapaige.github.io/LittleGems/",
  //   linkText: "See Project Six",
  // },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Row className="cards">
        {projectArray.map(project => (<ProjectCard key={project.title} {...project} />))}
      </Row>
      
    </div>
  );
}

export default App
