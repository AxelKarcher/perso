import Text from 'components/Text/Text'

import './Header.scss'

const choices = [
  {label: 'Compétences', identifier: 'skills'},
  {label: 'Formation', identifier: 'education'},
  {label: 'Expériences', identifier: 'projects'}
]

const Header = ({onSelectChoice}) => {
  return (
    <div className='header-container'>
      {choices.map(({label, identifier}, i) => (
        <Text
          key={i}
          text={label}
          isWeight
          onClick={() => onSelectChoice(identifier)}
        />
      ))}
    </div>
  )
}

export default Header