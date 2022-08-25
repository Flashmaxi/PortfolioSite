import './index.scss'
import React, { Fragment, useEffect, useState } from 'react'
// import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Tomin from '../../assets/images/tomin.png'
import Btc from '../../assets/images/btcmeetups.png'
import Quotes from '../../assets/images/quotes.png'
import Loader from 'react-loaders'


  const portfolio = [
      {
          "cover": Tomin,
          "title": "Auto Centar Tomin",
          "description": "Small company site completed with: HTML5, Tailwind",
          "url": "http://autocentartomin.com"
      },
      {
          "cover": Btc,
          "title": "BTC Meetups app",
          "description": "React app created and will be improved and upgraded in near future. ReactJS | MongoDB Atlas ",
          "url": "https://btc-meetups.vercel.app/"
      },
      {
          "cover": Quotes,
          "title": "Quotes app",
          "description": "React | Firebase app for publishing quotes. In the same time it was used for React hooks practice.",
          "url": "https://customhookspractice.web.app/"
      }
  ]


const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
          {
              portfolio.map((portfolio, idx) => {
                  return (
                      <div className="image-box" key={idx}>
                          <img 
                          src={portfolio.cover}
                          className="portfolio-image"
                          alt="portfolio" />
                          <div className="content">
                              <p className="title">{portfolio.name}</p>
                              <h4 className="description">{portfolio.description}</h4>
                              <button
                                  className="btn"
                                  onClick={() => window.open(portfolio.url)}
                              >View</button>
                          </div>
                      </div>
                  )
              })
          }
      </div>
  );
}

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
