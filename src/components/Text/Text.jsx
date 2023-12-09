import './Text.scss'

const Text = ({text, isWeight, size, className}) => {
  return (
    <span className={`text-container ${isWeight && 'weight'} ${size} ${className}`}>
      {text}
    </span>
  )
}

export default Text