import './Image.scss'

const Image = ({src, size, className}) => {
  return (
    <img className={`image-container ${size} ${className}`} src={src} alt='img' />
  )
}

export default Image