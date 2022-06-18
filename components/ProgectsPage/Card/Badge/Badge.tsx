import { Badge } from 'react-bootstrap'

export const BadgeComponent = ({ badgeArr }: { badgeArr: [] }) => {

  return (
    <div className="badgs">
      {badgeArr.map((el, index) =>(
        <Badge 
          key={index}
          className={`text-light bg-green text-uppercase me-1 ${currentColor(el)}`}
        >
          {el}
        </Badge>
      ))}
    </div>
  )
}

function currentColor(stack: string) {
  switch (stack) {
    case 'js':
      return 'js-bg-color'
    case 'css':
      return 'css-bg-color'
    case 'html':
      return 'html-bg-color'
    case 'scss':
      return 'scss-bg-color'
    case 'react':
      return 'react-bg-color'
    case 'php':
      return 'php-bg-color'
    case 'recoil':
      return 'recoil-bg-color'
    case 'bootstrap':
      return 'bootstrap-bg-color'
    default:
      return ''
  }
}