import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap'
import { useSetRecoilState } from 'recoil'
import { isCardOpen } from '../../../Store/Atoms'

interface ICard {
  title: string
  subtitle: string
  description: string
  img: string
  stackArr: []
  webLink: string
  codeLink: string
}

export const Card = ({ title, subtitle, description, img, stackArr, webLink, codeLink }: ICard) => {
  const setIsOpen = useSetRecoilState(isCardOpen)
  const [isShowCard, setIsShowCard] = useState(false)

  useEffect(() => {
    function close() {
      setIsShowCard(false)
      setIsOpen(false)
    }
    document.addEventListener('click', close)
    return () => { document.removeEventListener('click', close) }
  }, [setIsOpen])

  const openHandler = () => {
    setTimeout(() => { setIsShowCard(!isShowCard) }, 0)
    setTimeout(() => {
      if(!isShowCard) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }, 0)
  }

  const stackBudgs = stackArr.map(el => ({ name: el, color: currentColor(el) }))
  return (
    <div className={`card ${isShowCard ? 'show' : ''}`}>
      <div className="badgs">
        {stackBudgs.map((el, index) =>(
          <Badge 
            key={index}
            className='text-light text-uppercase me-1'
            style={{ backgroundColor: el.color }}
          >
            {el.name}
          </Badge>
        ))}
      </div>
      <div className="card__image-holder">
        <Image className="card__image" src={img} width='300px' height='225px' alt="wave" />
      </div>
      <div className="card-title">
        <button onClick={openHandler} className="toggle-info btn">
          <span className="left"></span>
          <span className="right"></span>
        </button>
        <h2>
          {title}
          <small>{subtitle}</small>
        </h2>
      </div>
      <div className="card-flap flap1">
        <div className="card-description">
          {description}
        </div>
        <div className="card-flap flap2">
          <div className="card-actions">
            <a href={webLink} target='blank' className="btn me-2">WEB</a>
            <a href={codeLink} target='blank' className="btn">CODE</a>
          </div>
        </div>
      </div>
    </div>
  )
}

function currentColor(stack: string) {
  switch (stack) {
    case 'js':
      return '#eed81a !important'
    case 'css':
      return 'RGB(32, 76, 228) !important'
    case 'html':
      return '#e34f26 !important'
    case 'scss':
      return '#c76493 !important'
    case 'react':
      return '#61DBFB !important'
    case 'php':
      return '#7377ae !important'
    case 'recoil':
      return '#3578e5 !important'
    case 'bootstrap':
      return '#7852b2 !important'
    default:
      return '#fff'
  }
}