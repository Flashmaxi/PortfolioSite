import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import LogoR from '../../assets/images/logo.svg'
import AnimatedLetters from '../AnimatedLetters'
import Avatar from './Avatar'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['H', 'i', '', 'I', '', '`m', '', 'E', 'd', 'o', '']}
            />

            <img src={LogoR} alt="developer" className="developer-logo" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']}
            />
          </h1>
          <h2>Frontend developer / Bitcoiner / Beer enthusiast</h2>
          <Link to="contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Avatar />
      <Loader type="pacman" />
    </>
  )
}

export default Home
