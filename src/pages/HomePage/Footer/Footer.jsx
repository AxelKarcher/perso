import {useState} from 'react'

import './Footer.scss'
import contacts from 'config/contacts'
import Icon from 'components/Icon/Icon'
import Toast from 'components/Toast/Toast'

const Footer = ({}) => {

  const [isToast, setIsToast] = useState(false)

  const handleLink = (link) => {window.open(link, '_blank')}

  const handleToast = (copy) => {
    setIsToast(true)
    navigator.clipboard.writeText(copy)
  }

  return (
    <div className='footer-container'>
      <Toast
        isActive={isToast}
        handleClose={() => setIsToast(false)}
        content='Copié dans le presse-papier'
      />
      {contacts?.map(({icon, link, copy}, i) => (
        <Icon
          key={i}
          src={icon}
          onClick={() => link ? handleLink(link) : handleToast(copy)}
          size='large'
        />
      ))}
    </div>
  )
}

export default Footer