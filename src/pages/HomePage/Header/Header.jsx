import Text from 'components/Text/Text'

import './Header.scss'

const Header = ({onClick}) => {
  return (
    <div className='header-container'>
      <Text text='Compétences' isWeight onClick={onClick} />
    </div>
  )
}

export default Header