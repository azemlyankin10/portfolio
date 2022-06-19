import { useEffect, useState } from 'react'
import { Loader } from '../../Loader/Loader'

type Style = { height: number | string, opacity: number}

export const WakaChart = ({ link }: { link: string }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [style, setStyle] = useState<Style>({ height: 200, opacity: 0})

  useEffect(() => {
    setStyle({ height: 'initial', opacity: 1 })
  }, [isLoaded])

  return(
    <div className='position-relative overflow-hidden bg-green-1 rounded-3 p-2'>
      <figure style={style}>
        <object 
          data={link}
          onLoad={() => { setIsLoaded(true) }} 
        ></object>
      </figure>
      {!isLoaded && <div className='position-absolute w-100 h-100 top-0'><Loader /></div>}
    </div>
  )
}

// https://wakatime.com/share/@906bd884-1d82-48ec-8cb4-d738c8c86b6a/9bfccdaa-814f-4b76-b671-1c92f7b62b14.svg