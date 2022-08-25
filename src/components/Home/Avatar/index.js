import './index.scss'
import AvatarLogo from '../../../assets/images/avatar.png'

const Avatar = () => {
  return (
    <div className="avatar-container">
      <img
        
        src={AvatarLogo}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Avatar
