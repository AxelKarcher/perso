import {useRef, useState, useEffect} from 'react'

import Text from 'components/Text/Text'
import Panel from 'components/Panel/Panel'
import texts from 'config/texts'
import ppImg from 'images/pp.png'
import Header from './Header/Header'
import Footer from './Footer/Footer'

import './HomePage.scss'

const {title, subTitle, p1, objectives, hobbies, skills} = texts

const HomePage = ({}) => {

  const textsRef = useRef(null)

  const skillsRef = useRef(null)

  const [textsHeight, setTextsHeight] = useState()

  useEffect(() => {
    const handleResize = () => {
      if (textsRef.current) {setTextsHeight(textsRef.current.offsetHeight)}
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {window.removeEventListener('resize', handleResize)}
  }, [])

  const handleScroll = () => {skillsRef.current.scrollIntoView({ behavior: 'smooth' })}

  return (
    <div id='home-page-container'>
      <Header onClick={handleScroll} />
      <div className='home-page-body'>
        <div className='top-area'>
          <div className='top-texts column'>
            <Text className='title' text={title} isWeight />
            <div className='bp-img-wrapper'>
              <img className='bp-img' src={ppImg} />
            </div>
            <div className='pp-texts'>
              <img src={ppImg} style={{height: textsHeight}} />
              <div ref={textsRef} className='column texts-target'>
                <Text className='subTitle' text={subTitle} isWeight />
                <Text text={p1} />
              </div>
            </div>
          </div>
          <div className='panels column'>
            <Panel title='Objectifs'>
              <Text text={objectives} />
            </Panel>
            <Panel title='Passions'>
              {hobbies?.map(({name, description}, i) => (
                <div className='column no-gap' key={i}>
                  <Text text={`➤ ${name}`} />
                  <Text text={description} />
                </div>
              ))}
            </Panel>
            <Panel forwardedRef={skillsRef} title='Compétences'>
              {skills?.map(({category, description}, i) => (
                <div className='column no-gap' key={i}>
                  <Text text={`➤ ${category}`} />
                  <Text text={description} />
                </div>
              ))}
            </Panel>
          </div>
        </div>
        <div className='projects-area'>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage