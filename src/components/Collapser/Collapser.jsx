import {useEffect, useState} from 'react'

import './Collapser.scss'
import stakLogo from 'images/stak.png'
import linkSvg from 'icons/link.svg'
import Tag from 'components/Tag/Tag'

const Collapser = ({onClick, data, isSelected}) => {

  const {company, name, logo, duration, year, description, tags, link} = data

  const [isShowingInfos, setIsShowingInfos] = useState(false)

  useEffect(() => {
    if (!isSelected) {
      setTimeout(() => {setIsShowingInfos(false)}, 500)
    } else {
      setIsShowingInfos(true)
    }
  }, [isSelected])

  const infosToDisplay = (company ? `${company} - ` : '') + `${year} - ${duration}`

  return (
    <div className={`wrapper ${isSelected && 'selected'}`}>
      <div className={`project-card-container ${isSelected && 'selected'}`} onClick={onClick}>
        <div className='body'>
          <div className='top'>
            <div className='left-part'>
              <img className='logo icon-base' src={logo || stakLogo} alt='project-card-logo' />
              <div className='label'>
                <div className='texts'>
                  <span className='title'>{name}</span>
                  {isSelected && <span className='infos'>{infosToDisplay}</span>}
                </div>
              </div>
            </div>
            {
              isSelected && link &&
              <div className='right-part'>
                <img onClick={() => window.open(link)} className='icon-base icon-clickable' src={linkSvg} alt='project-card-link' />
              </div>
            }
          </div>
          {
            isShowingInfos &&
            <>
              <div className='tags'>{tags?.map((elem, i) => (<Tag key={i} label={elem} />))}</div>
              <div className='description'>{description}</div>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Collapser