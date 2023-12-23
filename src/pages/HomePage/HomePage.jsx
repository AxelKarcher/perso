import {useRef} from 'react'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Projects from './Projects/Projects'
import InfosPanels from './InfosPanels/InfosPanels'
import InfosTexts from './InfosTexts/InfosTexts'

import './HomePage.scss'

const HomePage = ({}) => {

  const skillsRef = useRef(null)
  const educationRef = useRef(null)
  const projectsRef = useRef(null)

  const handleScroll = (e) => {
    switch (e) {
      case 'skills':
        skillsRef.current.scrollIntoView({ behavior: 'smooth' })
      case 'education':
        educationRef.current.scrollIntoView({ behavior: 'smooth' })
      case 'projects':
        projectsRef.current.scrollIntoView({ behavior: 'smooth' })
      default:
        break
    }
  }

  return (
    <div id='home-page-container'>
      <Header onSelectChoice={(e) => handleScroll(e)} />
      <div className='home-page-body'>
        <InfosTexts />
        <InfosPanels skillsRef={skillsRef} educationRef={educationRef} />
        <Projects projectsRef={projectsRef} />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage