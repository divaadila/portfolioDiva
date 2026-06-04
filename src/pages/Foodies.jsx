import '../App.css'
import arrow from '../assets/arrow.svg'
import whiteArrow from '../assets/whiteArrow.svg'
import macbook1 from '../assets/macbook1.svg'
import macbook2 from '../assets/macbook2.svg'
import aboutUs from '../assets/aboutUs.svg'
import landing from '../assets/landing.svg'
import recipe from '../assets/recipe.svg'
import detailRecipe from '../assets/detailRecipe.svg'
import signIn from '../assets/signIn.svg'
import signUp from '../assets/signUp.svg'
import editProfile from '../assets/editProfile.svg'
import flower1 from '../assets/flower1.svg'
import { Link } from 'react-router-dom'
import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.css'
import { useState, useEffect } from 'react'

function Foodies() {
  const previews = [
    { src: landing, alt: 'landing' },
    { src: recipe, alt: 'recipe' },
    { src: detailRecipe, alt: 'detailRecipe' },
    { src: signIn, alt: 'signIn' },
    { src: signUp, alt: 'signUp' },
    { src: editProfile, alt: 'editProfile' },
    { src: aboutUs, alt: 'aboutUs' },
  ]
  const [activeIndex, setActiveIndex] = useState(0)

  const prev = () => setActiveIndex(i => (i - 1 + previews.length) % previews.length)
  const next = () => setActiveIndex(i => (i + 1) % previews.length)

  return (
    <div className="container">
      <Link to="/" className="back">
        <img src={arrow} alt="arrow" style={{transform: "rotate(90deg)"}} />
        <p>Back</p>
      </Link>
      <h2><span style={{color: "#FF9F0D"}}>Foodies</span>: International Web Recipe</h2>
      <div className="project-container">
        <div className="project-section">
          <h3>Overview</h3>
          <p>Foodies is a simple recipe website developed for academic paper purposes, aimed at providing an easy guide for users to explore and try various international cuisines. The website features 20 recipes from different countries, presented with well-structured information, including ingredients and step-by-step instructions. With a clean and user-friendly interface, Foodies makes it easier for users to access and understand each recipe. In addition, various supporting features are included to enhance user interaction and overall experience.</p>
        </div>
        <div className="section-wrapper">
          <div className="section-wrapper2">
            <div className="project-section">
              <h3>Project Goal</h3>
              <p>Designing and developing a responsive recipe website with a clean and user-friendly interface to help users explore international recipes more easily, while also improving front-end development and UI design skills through the implementation of interactive pages and responsive layouts.</p>
            </div>
            <div className="project-section">
              <h3>Role</h3>
              <p>Web Developer and UI/UX Designer</p>
            </div>
            <div className="project-section">
              <h3>Technology Used</h3>
              <p>Html, Css, Javascript, PHP, MySQL, Figma</p>
            </div>
            <div className="project-section">
              <h3>Key Features</h3>
              <div className="key-features">
                <img src={flower1} alt="flower" className="flower-list"/>
                <p>Landing Page</p>
              </div>
              <div className="key-features">
                <img src={flower1} alt="flower" className="flower-list"/>
                <p>User Authentication</p>
              </div>
              <div className="key-features">
                <img src={flower1} alt="flower" className="flower-list"/>
                <p>User Profile</p>
              </div>
              <div className="key-features">
                <img src={flower1} alt="flower" className="flower-list"/>
                <p>Recipe Collection</p>
              </div>
              <div className="key-features">
                <img src={flower1} alt="flower" className="flower-list"/>
                <p>Recipe Detail Page</p>
              </div>
              <div className="key-features">
                <img src={flower1} alt="flower" className="flower-list"/>
                <p>Comment Features</p>
              </div>
            </div>
          </div>
          <div className="mockup-container">
            <img src={macbook1} alt="macbook1" className="mockup" />
            <img src={macbook2} alt="macbook2" className="mockup" />
          </div>
        </div>
        <div className="project-section">
          <h3>Web Preview</h3>
          <div className="gallery">
            <div className="gallery-main">
              <button className="gallery-btn left" onClick={prev}>
                <img src={whiteArrow} alt="whiteArrow"/>
              </button>
              <img src={previews[activeIndex].src} alt={previews[activeIndex].alt} className="gallery-active" />
              <button className="gallery-btn right" onClick={next}>
                <img src={whiteArrow} alt="whiteArrow" style={{transform: "rotate(180deg)"}}/>
              </button>
            </div>
            <div className="gallery-thumbs">
              {previews.map((item, i) => (
                <img
                  key={i}
                  src={item.src}
                  alt={item.alt}
                  className={`gallery-thumb ${i === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="project-nav">
        <div className="project-nav-title">
          <h2>Foodies</h2> 
        </div>
        <div className="prev-next">
          <Link to="/todomate" className="prev"><p>Previous</p></Link>
          <Link to="/todomate" className="next"><p>Next</p></Link>
        </div>
      </div>
      <footer className="footer-project">
        <p>© 2026 Diva Maharani Adila. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Foodies