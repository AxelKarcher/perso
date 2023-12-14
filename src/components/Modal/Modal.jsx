import Panel from 'components/Panel/Panel'
import './Modal.scss'

const Modal = ({isActive, handleClose, children, className, title}) => {

  const handleLocalClose = () => {handleClose()}

  return (
    <div
      className={`modal-container ${!isActive && 'inactive'} ${className}`}
      onClick={handleLocalClose}
    >
      <Panel
        childrenClassName='children-container'
        onClose={handleLocalClose}
        title={title}
        onClick={(e) => e?.stopPropagation()}
      >
        {children}
      </Panel>
    </div>
  )
}

export default Modal