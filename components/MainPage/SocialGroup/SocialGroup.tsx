import { ListGroup } from "react-bootstrap";
import GitImg from '../../../utils/icons/git.svg'
import TelegramImg from '../../../utils/icons/telegramm.svg'
import WhatsAppImg from '../../../utils/icons/whatsapp.svg'

export const SocialGroup = () => (
  <ListGroup as='ul' horizontal>
    <ListGroup.Item as='li' className='bg-transparent'>
      <a href='#'>
        <GitImg/>
      </a>
    </ListGroup.Item>
    <ListGroup.Item as='li' className='bg-transparent'>
      <a href='#'>
        <TelegramImg/>
      </a>
    </ListGroup.Item>
    <ListGroup.Item as='li' className='bg-transparent'>
      <a href='#'>
        <WhatsAppImg/>
      </a>
    </ListGroup.Item>
  </ListGroup>
)