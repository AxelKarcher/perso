import {useState} from 'react'

import contacts from 'config/contacts'
import Icon from 'components/Icon/Icon'
import Toast from 'components/Toast/Toast'

import downloadIcon from 'icons/download.svg'
import './Footer.scss'

const Footer = ({}) => {

  const [isToast, setIsToast] = useState(false)

  const handleLink = (link) => {window.open(link, '_blank')}

  const handleToast = (copy) => {
    setIsToast(true)
    navigator.clipboard.writeText(copy)
  }

  const handleDownloadResume = () => {
    const fileUrl = '/CV_Axel_KARCHER.pdf';
    const downloadLink = document.createElement('a');

    downloadLink.href = fileUrl;
    downloadLink.download = 'CV_Axel_KARCHER';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
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
      <Icon
        src={downloadIcon}
        onClick={handleDownloadResume}
        size='large'
      />
    </div>
  )
}

export default Footer