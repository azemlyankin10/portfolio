import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { isCardOpenState } from '../../../Store/Atoms'
import { BadgeComponent } from './Badge/Badge'

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
  const setIsOpen = useSetRecoilState(isCardOpenState)
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

  return (
    <div className={`card ${isShowCard ? 'show' : ''}`}>
      <BadgeComponent badgeArr={stackArr} />
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

