import { Container, Row, Col } from 'react-bootstrap'
import { SocialGroup } from './SocialGroup/SocialGroup'
import Image from 'next/image'

export interface IMe {
  name: string
  job: string
  description: string
  img: string
  social: { name: string, link: string }[]
}

export const MainPageComponent = ({ name, job, description, img, social }: IMe)  => (    
  <div className='h-fluid'>
    <Container className='pt-lg-5 h-fluid__1'>
      <Row className='align-items-center pt-lg-5'>
        <Col lg={5} className='text-center text-lg-start'>
          <Image src={img} alt='Image man' width='438px' height='368px'/>
        </Col>

        <Col lg={7}>
          <h1 className='fs-1'>
            {name}
            <span className='d-block fs-4 mt-1'>
              {job}
            </span>
          </h1>
          <p className='me-lg-5 mb-4'>
            {description}
          </p>
          <SocialGroup social={social} />
        </Col>

      </Row>
    </Container>
    <div className='h-fluid__2'/>
    <div id='wave' className='mt-auto h-fluid__3'/>
  </div>
)