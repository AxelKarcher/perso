import Panel from 'components/Panel/Panel'
import Text from 'components/Text/Text'
import infos from 'config/infos'

const InfosPanels = ({skillsRef, educationRef}) => {

  const {objectives, hobbies, skills, education} = infos

  return (
    <div className='column'>
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
      <Panel title='Compétences' forwardedRef={skillsRef}>
        {skills?.map(({category, description}, i) => (
          <div className='column no-gap' key={i}>
            <Text text={`➤ ${category}`} />
            <Text text={description} />
          </div>
        ))}
      </Panel>
      <Panel title='Formation' forwardedRef={educationRef}>
        {education?.map(({title, description}, i) => (
          <div className='column no-gap' key={i}>
            <Text text={`➤ ${title}`} />
            <Text text={description} />
          </div>
        ))}
      </Panel>
    </div>
  )
}

export default InfosPanels