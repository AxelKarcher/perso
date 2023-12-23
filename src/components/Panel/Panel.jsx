import Separator from 'components/Separator/Separator'
import closeSvg from 'icons/close.svg'
import Icon from 'components/Icon/Icon'

import leftArrow from 'icons/leftArrow.svg'
import './Panel.scss'

const Panel = ({
  title, children, className, onClose, isOpen, isLocked,
  onClick, childrenClassName, forwardedRef, isCollapser, onTitleClick
}) => {

  const handleTitleClick = (e) => {
    e.stopPropagation()
    onTitleClick()
  }

  const isOpened = (isCollapser && isOpen) || !isCollapser

  return (
    <div
      className={`panel-container ${isCollapser && 'collapser'} ${className}`}
      onClick={onClick}
      ref={forwardedRef}
    >
      {
        title &&
        <div className='title-area' onClick={onTitleClick ? handleTitleClick : null}>
          <span className='row'>
            <span className='panel-title'>{title}</span>
            {isCollapser && <Icon className={isOpen ? 'opened' : 'closed'} src={leftArrow} />}
            {onClose && <Icon onClick={onClose} src={closeSvg} />}
          </span>
          {isOpened && <Separator />}
        </div>
      }
      {
        isOpened &&
        <div className={`children-container ${childrenClassName}`}>
          {children}
        </div>
      }
    </div>
  )
}

export default Panel