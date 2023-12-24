import {useEffect, useRef, useState} from 'react'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Projects from './Projects/Projects'
import InfosPanels from './InfosPanels/InfosPanels'
import InfosTexts from './InfosTexts/InfosTexts'

import './HomePage.scss'

const scrollThreshold = -100

const scrollSettings = {behavior: 'smooth', block: 'start'}

const HomePage = ({}) => {

  const pageRef = useRef(null)

  const skillsRef = useRef(null)
  const educationRef = useRef(null)
  const projectsRef = useRef(null)

  const [scrollInfos, setScrollInfos] = useState({})

  useEffect(() => {
    const trackScrollPosition = () => {
      setScrollInfos({
        skills: skillsRef.current.getBoundingClientRect().y <= scrollThreshold,
        education: educationRef.current.getBoundingClientRect().y <= scrollThreshold,
        projects: projectsRef.current.getBoundingClientRect().y <= scrollThreshold,
      })
    }

    pageRef.current.addEventListener('scroll', trackScrollPosition, {passive: true})

    return () => {pageRef.current.removeEventListener('scroll', trackScrollPosition)}
  }, [])

  const handleScroll = (e) => {
    switch (e) {
      case 'skills':
        skillsRef.current.scrollIntoView({...scrollSettings})
        break
      case 'education':
        educationRef.current.scrollIntoView({...scrollSettings})
        break
      case 'projects':
        projectsRef.current.scrollIntoView({...scrollSettings})
        break
      default:
        break
    }
  }

  return (
    <div id='home-page-container' ref={pageRef}>
      <Header scrollInfos={scrollInfos} onSelectChoice={(e) => handleScroll(e)} />
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