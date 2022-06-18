import Link from 'next/link'
import { ListGroup } from 'react-bootstrap'
import GitImg from '../../../utils/icons/git.svg'
import TelegramImg from '../../../utils/icons/telegramm.svg'
import WhatsAppImg from '../../../utils/icons/whatsapp.svg'

export const SocialGroup = () => (
  <ListGroup as='ul' horizontal>
    <ListGroup.Item as='li' className='bg-transparent social-link border-0'>
      <Link href='#'>
        <a><GitImg/></a>
      </Link>
    </ListGroup.Item>
    <ListGroup.Item as='li' className='bg-transparent social-link border-0'>
      <Link href='#'>
        <a><TelegramImg/></a>
      </Link>
    </ListGroup.Item>
    <ListGroup.Item as='li' className='bg-transparent social-link border-0'>
      <Link href='#'>
        <a><WhatsAppImg/></a>
      </Link>
    </ListGroup.Item>
  </ListGroup>
)