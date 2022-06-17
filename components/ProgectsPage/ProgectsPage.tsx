import { Container } from 'react-bootstrap'
import { useRecoilValue } from 'recoil'
import { isCardOpen } from '../../Store/Atoms'
import { Card } from './Card/Card'

type typeProgect = {
  name: string
  type: string,
  description: string
  img: string
  stack: []
  links: {
    site: string
    code: string
  }
}

export const ProgectsPageComponent = ({ data }: { data: typeProgect[] }) => {
  const isOpen = useRecoilValue(isCardOpen)

  return (
    <Container>
      <div className={`cards ${isOpen ? 'showing' : ''} pt-5`}>
        {data.map((el, index) => (
          <Card key={index}
            title={el.name}
            subtitle={el.type}
            description={el.description}
            img={el.img[0]}
            stackArr={el.stack}
            webLink={el.links.site}
            codeLink={el.links.code}
          />
        ))}
      </div>
    </Container>
  )
}