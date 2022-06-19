import { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { useRecoilValue } from 'recoil'
import { isCardOpenState } from '../../Store/Atoms'
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
  const isOpen = useRecoilValue(isCardOpenState)
  const [progects, setProgects] = useState(data)
  const [selectValue, setSelectValue] = useState('all')

  useEffect(() => {
    switch (selectValue) {
      case 'all':
        setProgects(data)
        break
      case 'landing':
        setProgects(data.filter(el => el.type === 'Landing page'))
        break
      case 'multiple':
        setProgects(data.filter(el => el.type === 'Multipage'))
        break
      case 'spa':
        setProgects(data.filter(el => el.type === 'SPA'))
        break
      default:
        setProgects(data)
        break
    }
  }, [data, selectValue])

  const selectHandler = (e: any) => { setSelectValue(e.target.value) }

  return (
    <Container>
      <Row className='pt-4 pt-lg-5 mt-lg-3'>
        <Col lg={9}>
          <h2 className='fs-1'>Portfolio</h2>
        </Col>
        <Col lg={3}>
          <Form.Select 
            className='ms-auto'
            onChange={selectHandler}
            value={selectValue}
          >
            <option value='all'>All</option>
            <option value='landing'>Landing page</option>
            <option value='multiple'>Multiple page</option>
            <option value='spa'>SPA</option>
          </Form.Select>
        </Col>
      </Row>
      <div className={`cards ${isOpen ? 'showing' : ''} py-5`}>
        {progects.map((el, index) => (
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