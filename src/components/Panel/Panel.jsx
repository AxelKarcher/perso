import Separator from 'components/Separator/Separator'
import closeSvg from 'icons/close.svg'
import Icon from 'components/Icon/Icon'
import './Panel.scss'

const Panel = ({
  title, children, className, onClose,
  onClick, childrenClassName, forwardedRef
}) => {
  return (
    <div className={`panel-container ${className}`} onClick={onClick} ref={forwardedRef}>
      {
        title &&
        <div className='title-area'>
          <span className='row'>
            <span className='panel-title'>{title}</span>
            {onClose && <Icon onClick={onClose} src={closeSvg} />}
          </span>
          <Separator />
        </div>
      }
      <div className={`children-container ${childrenClassName}`}>
        {children}
      </div>
    </div>
  )
}

export default Panel