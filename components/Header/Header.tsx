import Link from 'next/link'
import { Navbar, Container, Nav } from 'react-bootstrap'
import HomeIcon from '../../utils/icons/home.svg'
import CodeIcon from '../../utils/icons/code.svg'
import { useRouter } from 'next/router'

export const Header = () => {
  const { pathname } = useRouter()
  
  return (
    <Navbar bg='transparent' className='px-0 py-3 py-lg-0' expand='lg'>
        <Container>
          <Link href='/'>
            <a className='d-lg-none'>
              <HomeIcon />
            </a>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" className='bg-light'/>
          <Navbar.Collapse id="navbarScroll" className='menu'>
            <Nav
              className='w-100 justify-content-evenly align-items-end align-items-lg-center pt-2 pt-lg-0'
              as='ul'
            >
              <Nav.Item as='li' className='mb-1 mb-lg-0'>
                <Link href='/education'>
                  <a 
                    className={`text-decoration-none text-secondary fs-5 circle-effect ${pathname === '/education' ? 'active' : ''}`}
                    onClick={(e) => {  //delete
                      e.preventDefault()
                      window.alert('Developing...')
                    }}
                  >
                    Education
                  </a>
                </Link>
              </Nav.Item>
              <Nav.Item as='li' className='mb-1 mb-lg-0'>
                <Link href='/progects'>
                  <a 
                    className={`text-decoration-none text-light fs-5 circle-effect ${pathname === '/progects' ? 'active' : ''}`}
                  >
                    Progects
                  </a>
                </Link>
              </Nav.Item>
              <Nav.Item as='li' className='bg-logo d-none d-lg-block'>
                <Link href='/'>
                  <a className='pt-2 d-flex justify-content-center align-items-center w-100'>
                    <CodeIcon />
                  </a>
                </Link>
              </Nav.Item>
              <Nav.Item as='li' className='mb-1 mb-lg-0'>
                <Link href='/activity'>
                  <a 
                    className={`text-decoration-none text-light fs-5 circle-effect ${pathname === '/activity' ? 'active' : ''}`}
                  >
                    Activity
                  </a>
                </Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Link href='/contacts'>
                  <a 
                    className={`text-decoration-none text-secondary fs-5 circle-effect ${pathname === '/contacts' ? 'active' : ''}`}
                    onClick={(e) => {  //delete
                      e.preventDefault()
                      window.alert('Developing...')
                    }}
                  >
                    Contacts
                  </a>
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}


