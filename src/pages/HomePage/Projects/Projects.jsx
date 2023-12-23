import {useState} from 'react'

import projects from 'config/projects'
import Panel from 'components/Panel/Panel'
import Text from 'components/Text/Text'

import './Projects.scss'

const Projects = ({projectsRef}) => {

  const [selectedIdx, setSelectedIdx] = useState()

  return (
    <div className='projects-container'>
      {projects.map((project, i) => {
        const {
          title, role, duration, type, context,
          achievements, technologies, tools
        } = project

        const topText = `${role} | ${type} | ${duration}`

        return (
          <Panel
            key={i}
            title={title}
            isCollapser
            isOpen={selectedIdx === i}
            onClick={() => setSelectedIdx(i)}
            onTitleClick={() => setSelectedIdx(selectedIdx === i ? undefined : i)}
            forwardedRef={projectsRef}
          >
            <Text size='small' text={topText} />
            <Text text={context} />
            {achievements?.map((achievement, j) => (
              <Text key={j} size='small' text={`➤ ${achievement}`} />
            ))}
            <div className='technologies-and-tools'>
              <div className='technologies column'>
                <Text text='Technologies:' />
                {technologies?.map((technologie, j) => (
                  <Text key={j} size='small' text={`➤ ${technologie}`} />
                ))}
              </div>
              <div className='tools column'>
                <Text text='Outils:' />
                {tools?.map((tool, j) => (
                  <Text key={j} size='small' text={`➤ ${tool}`} />
                ))}
              </div>
            </div>
          </Panel>
        )
      })}
    </div>
  )
}

export default Projects