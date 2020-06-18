import React from 'react'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import List from './components/List'
import Card from './components/card'

const projectArray = [
  {
    title: 'Project One - Little Gems',
    subtitle: 'Helping people find small restaurants near them.',
    text: 'Coding bootcamps first project learning how to make a javascript based website.',
    link: 'https://erikapaige.github.io/LittleGems/',
    linkText: 'See Project One'
  },
  {
    title: 'Project two - Little Gems',
    subtitle: 'some other subtitle',
    text: 'Coding bootcamps first project learning how to make a javascript based website.',
    link: 'https://erikapaige.github.io/LittleGems/',
    linkText: 'See Project Two'
  }
]

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      {projectArray.map(project => (<Card key={project.title} {...project} />))}
      <List />
    </div>
  );
}

export default App
