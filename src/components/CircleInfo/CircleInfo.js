import sCi from './CircleInfo.module.css'

export const CircleInfo = ({ value, text }) => {
  return <div className={sCi.circleInfo}>
    <span>{value}</span>
    <span>{text}</span>
  </div>
}
