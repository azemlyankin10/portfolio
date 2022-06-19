import { Container, Row, Col } from 'react-bootstrap'
import { WakaChart } from './WakaChart/WakaChart'

export const ActivityPageComponent = () => (
  <Container className='py-4 py-lg-5 mt-lg-3'>
    <h2 className='fs-1 mb-3'>Activity</h2>
    <Row>
      <Col lg={6} className='mb-4'>
        <WakaChart link='https://wakatime.com/share/@906bd884-1d82-48ec-8cb4-d738c8c86b6a/9bfccdaa-814f-4b76-b671-1c92f7b62b14.svg'/>
      </Col>
      <Col lg={6} className='mb-4'>
        <WakaChart link='https://wakatime.com/share/@906bd884-1d82-48ec-8cb4-d738c8c86b6a/15c88681-a767-44f2-8ebc-536cb99dcee0.svg'/>
      </Col>
      <Col lg={4} className='mb-4'>
        <WakaChart link='https://wakatime.com/share/@906bd884-1d82-48ec-8cb4-d738c8c86b6a/a58c8f5f-57fe-4d9b-9654-152457b9f503.svg'/>
      </Col>
      <Col lg={4} className='mb-4'>
        <WakaChart link='https://wakatime.com/share/@906bd884-1d82-48ec-8cb4-d738c8c86b6a/23d5455b-e112-4655-8996-f2d3567cf417.svg'/>
      </Col>
      <Col lg={4} className='mb-4'>
        <WakaChart link='https://wakatime.com/share/@906bd884-1d82-48ec-8cb4-d738c8c86b6a/a9023e61-7aa3-4273-9092-235e807afaaa.svg'/>
      </Col>
    </Row>
  </Container>
)