import Link from 'next/link'
import { ListGroup } from 'react-bootstrap'
import GitImg from '../../../utils/icons/git.svg'
import TelegramImg from '../../../utils/icons/telegramm.svg'
import WhatsAppImg from '../../../utils/icons/whatsapp.svg'

export const SocialGroup = ({ social }: { social: { name: string, link: string }[] }) => (
  <ListGroup as='ul' horizontal>
    {social.map((el, index) => {
      let icon 
      switch (el.name) {
        case 'git':
          icon = <GitImg/>
          break
        case 'telegramm':
          icon = <TelegramImg/>
          break
        case 'whatsapp':
          icon = <WhatsAppImg/>
          break
        default:
          icon = <></>
          break
      }
      return(
        <ListGroup.Item key={index} as='li' className='bg-transparent social-link border-0'>
          <Link href={el.link}>
            <a>{icon}</a>
          </Link>
        </ListGroup.Item>
      )
    })}
  </ListGroup>
)