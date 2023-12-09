import Text from 'components/Text/Text'
import Panel from 'components/Panel/Panel'
import texts from 'config/texts'

import './HomePage.scss'

const {title, subTitle, p1, objectives, hobbies, skills} = texts

const HomePage = ({}) => {
  return (
    <div id='home-page-container'>
      <div className='top-area'>
        <div className='texts column'>
          <Text className='title' text={title} isWeight />
          <Text text={subTitle} isWeight />
          <Text text={p1} />
        </div>
        <div className='panels column'>
          <Panel title='Objectifs'>
            <Text text={objectives} />
          </Panel>
          <Panel title='Passions'>
            {hobbies?.map(({name, description}, i) => (
              <div className='column no-gap' key={i}>
                <Text text={`➤ ${name}`} />
                <Text text={description} />
              </div>
            ))}
          </Panel>
          <Panel title='Compétences'>
            {skills?.map(({category, description}, i) => (
              <div className='column no-gap' key={i}>
                <Text text={`➤ ${category}`} />
                <Text text={description} />
              </div>
            ))}
          </Panel>
        </div>
        </div>
      <div className='projects-area'>

      </div>

    </div>
  )
}

export default HomePage