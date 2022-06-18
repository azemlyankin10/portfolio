import Link from 'next/link'
import { Navbar, Container, Nav } from 'react-bootstrap'
import HomeIcon from '../../utils/icons/home.svg'

export const Header = () => (
  <Navbar bg='transparent' className='p-3 p-lg-0' expand='lg'>
      <Container>
        <Link href='/'>
          <a className='d-lg-none'>
            <HomeIcon />
          </a>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" className='bg-light'/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className='w-100 justify-content-evenly align-items-end align-items-lg-center pt-2 pt-lg-0'
            as='ul'
          >
            <Nav.Item as='li' className='mb-1 mb-lg-0'>
              <Link href='/'>
                <a className='text-decoration-none text-light fs-5'>Education</a>
              </Link>
            </Nav.Item>
            <Nav.Item as='li' className='mb-1 mb-lg-0'>
              <Link href='/progects'>
                <a className='text-decoration-none text-light fs-5'>Progects</a>
              </Link>
            </Nav.Item>
            <Nav.Item as='li' className='bg-logo d-none d-lg-block'>
              <Link href='/'>
                <a className='pt-1 d-flex justify-content-center align-items-center w-100'>
                  <HomeIcon />
                </a>
              </Link>
            </Nav.Item>
            <Nav.Item as='li' className='mb-1 mb-lg-0'>
              <Link href='/'>
                <a className='text-decoration-none text-light fs-5'>Progects</a>
              </Link>
            </Nav.Item>
            <Nav.Item as='li'>
              <Link href='/'>
                <a className='text-decoration-none text-light fs-5'>Contacts</a>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
)


