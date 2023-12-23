import {useState, useEffect, useRef} from 'react'

import Text from 'components/Text/Text'
import texts from 'config/texts'
import ppImg from 'images/pp.png'

import './InfosTexts.scss'

const InfosTexts = ({}) => {

  const {title, subTitle, p1} = texts

  const textsRef = useRef(null)

  const [textsHeight, setTextsHeight] = useState()

  useEffect(() => {
    const handleResize = () => {
      if (textsRef.current) {setTextsHeight(textsRef.current.offsetHeight)}
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {window.removeEventListener('resize', handleResize)}
  }, [])

  return (
    <div className='infos-texts-container'>
      <Text className='title' text={title} isWeight />
      {/* <div className='pp-breakpoint'>
        <img src={ppImg} />
      </div> */}
      <div className='row'>
        {/* <img className='pp-default' src={ppImg} style={{height: textsHeight}} /> */}
        <div ref={textsRef} className='column'>
          <Text className='subTitle' text={subTitle} isWeight />
          <Text text={p1} />
        </div>
      </div>
    </div>
  )
}

export default InfosTexts