import './App.css'
import shape1 from './assets/shape1.svg'
import shape2 from './assets/shape2.svg'
import diva from './assets/foto.svg'
import arrow from './assets/arrow.svg'
import flower from './assets/flower.svg'
import flowerHover from './assets/flowerHover.svg'
import flower1 from './assets/flower1.svg'
import flower2 from './assets/flower2.svg'
import hi from './assets/hi.svg'
import card1 from './assets/card1.svg'
import card2 from './assets/card2.svg'
import card3 from './assets/card3.svg'
import card4 from './assets/card4.svg'
import foodies from './assets/foodies.svg'
import todomate from './assets/todomate.svg'
import star1 from './assets/star1.svg'
import star2 from './assets/star2.svg'
import html from './assets/html.svg'
import css from './assets/css.svg'
import javascript from './assets/javascript.svg'
import react from './assets/react.svg'
import python from './assets/python.svg'
import php from './assets/php.svg'
import mysql from './assets/mysql.svg'
import figma from './assets/figma.svg'
import canva from './assets/canva.svg'
import excel from './assets/excel.svg'
import workshop from './assets/workshop.jpg'
import dicoding1 from './assets/dicoding1.jpg'
import dicoding2 from './assets/dicoding2.jpg'
import revou from './assets/revou.jpg'
import bangkit from './assets/bangkit.jpg'
import dqlab from './assets/dqlab.jpg'
import about from './assets/about.svg'
import hand from './assets/hand.svg'
import handHover from './assets/handHover.svg'
import { useState, useEffect, useRef } from 'react'
import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.css'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Foodies from './pages/Foodies'
import ToDoMate from './pages/ToDoMate'


function App() {
  const [active, setActive] = useState('tech')
  const [visible, setVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const pillRef = useRef(null)
  const techRef = useRef(null)
  const certRef = useRef(null)
  const sliderRef = useRef(null)

  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      zoomable: true,
    })

    return () => {
      lightbox.destroy()
    }
  }, [active])

  const location = useLocation()

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-section')
    elements.forEach(el => el.classList.remove('visible'))

    setVisible(false)
    setActive('tech')

    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.2 })

      elements.forEach(el => observer.observe(el))

      // re-observe toggle pill
      if (pillRef.current) {
        const pillObserver = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true)
            moveSlider('tech')
            pillObserver.disconnect()
          }
        }, { threshold: 0.3 })
        pillObserver.observe(pillRef.current)
      }
    }, 100)

  }, [location])

  const moveSlider = (tab) => {
    const btn = tab === 'tech' ? techRef.current : certRef.current
    if (!btn || !sliderRef.current) return
    sliderRef.current.style.width = `${btn.offsetWidth}px`
    sliderRef.current.style.transform = `translateX(${btn.offsetLeft - 4}px)`
  }

  const handleSwitch = (tab) => {
    setVisible(false)
    moveSlider(tab)
    setTimeout(() => {
      setActive(tab)
      setVisible(true)
    }, 150)
  }

  return (
    <Routes>
      <Route path="/" element={
        <div className="container">
          <nav>
            <ul className="nav-bar">
              <li><a href="#work">Projects</a></li>
              <li><a href="#skill">Skills</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <main>
            <section className="hero fade-section">
              <div className="hero-content">
                <img src={shape1} alt="shape" className="hero-img" />
                <div className="hero-text">
                  <div className="hero-text-wrapper">
                    <img src={hi} alt="hi" className="hi"/>
                    <h1>
                      Welcome To <br />
                      My <span>Portfolio</span>
                    </h1>
                    <img src={flower1} alt="flower" className="flower"/>
                  </div>
                  <p>User experience is my priority. I enjoy creating clean and visually engaging websites that are simple and easy to use. Passionate about exploring new ideas and continuously improving my design and development skills</p>
                </div>
                <img src={diva} alt="foto" className="hero-img"/>
              </div>
              <div className="social-links">
                <a href="mailto:divaadila01@gmail.com" target="_blank" rel="noopener noreferrer">Chat with me</a>
                <a href="/cv-diva.pdf" target="_blank" rel="noopener noreferrer">View CV</a>
              </div>
              <div className="scroll">
                <p>Scroll Down</p>
                <img src={arrow} alt="arrow" />
              </div>
            </section>
            <section className="power fade-section">
              <h2>My <span>Special</span> Powers</h2>
              <div className="power-wrapper">
                <img src={shape2} alt="shape" className="power-img-left" />
                <div className="power-content">
                  <div className="power-card">
                    <p>Clean & Semantic Code</p>
                    <p style={{fontSize: "12px", fontWeight: "400"}}>Well-structured code that is easy to read and maintain</p>
                    <img src={card1} alt="card" className="card-img" />
                  </div>
                  <div className="power-card">
                    <p>Clear & User Friendly</p>
                    <p style={{fontSize: "12px", fontWeight: "400"}}>Simple and intuitive interfaces for a better user experience</p>
                    <img src={card2} alt="card" className="card-img"/>
                  </div>
                  <div className="power-card">
                    <p>Responsive Design</p>
                    <p style={{fontSize: "12px", fontWeight: "400"}}>Optimized for desktop, tablet, and mobile devices</p>
                    <img src={card3} alt="card" className="card-img"/>
                  </div>
                  <div className="power-card">
                    <p>Modern UI Design</p>
                    <p style={{fontSize: "12px", fontWeight: "400"}}>Clean and visually appealing interface design</p>
                    <img src={card4} alt="card" className="card-img"/>
                  </div>
                </div>
                <img src={flower2} alt="flower" className="power-img-right" />
              </div>
            </section>
            <section className="work fade-section" id="work">
              <h2>My Selected Works</h2>
              <div className="project-wrapper">
                <Link to="/foodies" className="project">
                  <img src={star1} alt="star" className="green-star" />
                  <div className="project-type">
                    <div className="disc-blue"></div>
                    <p>Real Project</p>
                  </div>
                  <h3><span style={{color: "#FF9F0D"}}>Foodies</span>: International<br /> Web Recipe</h3>
                  <img src={foodies} alt="project" className="foodies" />
                </Link>

                <Link to="/todomate" className="project">
                  <div className="project-type">
                    <div className="disc-green"></div>
                    <p>Dummy Project</p>
                  </div>
                  <h3><span style={{color: "#FEA8EC"}}>ToDoMate</span> App Design</h3>
                  <img src={todomate} alt="project" className="todomate" />
                  <img src={star2} alt="star" className="yellow-star" />
                </Link>
              </div>
            </section>
            <section className="skill" id="skill">
              <h2 className="fade-section">Skills</h2>
              <div className="toggle-pill" ref={pillRef}>
                <div className="toggle-slider" ref={sliderRef}></div>
                  <button ref={techRef} className={`toggle-btn ${active === 'tech' ? 'active' : ''}`} onClick={() => handleSwitch('tech')}>Tech Stack</button>
                  <button ref={certRef} className={`toggle-btn ${active === 'cert' ? 'active' : ''}`} onClick={() => handleSwitch('cert')}>Certificate</button>
              </div>
              <div className={`fade-in ${visible ? 'visible' : ''}`}>
                {active === 'tech' && (
                  <div className="tech-grid">
                    <div className="tech"><img src={html} alt="html" className="tech-img" />Html</div>
                    <div className="tech"><img src={css} alt="css" className="tech-img" />Css</div>
                    <div className="tech"><img src={javascript} alt="javascript" className="tech-img" />Javascript</div>
                    <div className="tech"><img src={react} alt="react" className="tech-img" />React JS</div>
                    <div className="tech"><img src={python} alt="python" className="tech-img" />Python</div>
                    <div className="tech"><img src={php} alt="php" className="tech-img" />Php</div>
                    <div className="tech"><img src={mysql} alt="mysql" className="tech-img" />MySQL</div>
                    <div className="tech"><img src={figma} alt="figma" className="tech-img" />Figma</div>
                    <div className="tech"><img src={canva} alt="canva" className="tech-img" />Canva</div>
                    <div className="tech"><img src={excel} alt="excel" className="tech-img" />Excel</div>
                  </div>
                )}
                {active === 'cert' && (
                  <div className="cert-grid">
                    <a href={workshop} className="cert glightbox">
                      <img src={workshop} alt="workshop" className="cert-img" />
                      <span>Workshop</span>
                    </a>

                    <a href={dicoding1} className="cert glightbox">
                      <img src={dicoding1} alt="dicoding1" className="cert-img" />
                      <span>Dicoding</span>
                    </a>

                    <a href={dicoding2} className="cert glightbox">
                      <img src={dicoding2} alt="dicoding2" className="cert-img" />
                      <span>Dicoding</span>
                    </a>

                    <a href={revou} className="cert glightbox">
                      <img src={revou} alt="revou" className="cert-img" />
                      <span>RevoU</span>
                    </a>

                    <a href={bangkit} className="cert glightbox">
                      <img src={bangkit} alt="bangkit" className="cert-img" />
                      <span>Bangkit</span>
                    </a>

                    <a href={dqlab} className="cert glightbox">
                      <img src={dqlab} alt="dqlab" className="cert-img" />
                      <span>DQlab</span>
                    </a>
                  </div>
                )}
              </div>
            </section>
            <section className="about fade-section" id="about">
              <h2>Behind The Pixels</h2>
              <div className="about-content">
                <img src={about} alt="about" className="about-img" />
                <div className="about-desc">
                  <p>Hi, I'm Diva, a recent Information Systems graduate from Gunadarma University based in Jakarta. I have a strong passion for web development and UI/UX design. I love designing interfaces that are aesthetically pleasing while also providing the best possible user experience</p>
                  <p>To me, great design isn't just about looks, it's all about how users interact and feel at ease while using a product. I genuinely enjoy playing around with new ideas, learning on the go, and constantly upgrading my skills through hands-on design and development to make digital work that's creative and meaningful</p>
                </div>
              </div>
            </section>
            <section className="contact" id="contact">
              <div 
                className="contact-header"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img src={isHovered ? flowerHover : flower} alt="flower" className="contact-img" />
                <img src={isHovered ? handHover : hand} alt="hand" className="hand" />
                <p className="contact-subtext">Think we vibe?</p>
                <p className="contact-headline">Get in touch</p>
              </div>
              <div className="contact-info">
                <a href="https://wa.me/6281286973773" target="_blank" rel="noopener noreferrer" className="contact-item">WhatsApp</a>
                <a href="https://www.linkedin.com/in/divaadila/" target="_blank" rel="noopener noreferrer" className="contact-item">LinkedIn</a>
                <a href="https://github.com/divaadila" target="_blank" rel="noopener noreferrer" className="contact-item">GitHub</a>
                <a href="https://dribbble.com/divaadila01" target="_blank" rel="noopener noreferrer" className="contact-item">Dribbble</a>
              </div>
            </section>
          </main>
          <footer className="footer">
            <ul className="bottom-nav-bar">
              <li><a href="#work">Projects</a></li>
              <li><a href="#skill">Skills</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <p>© 2026 Diva Maharani Adila. All rights reserved.</p>
          </footer>
        </div>
      } />
      <Route path="/foodies" element={<Foodies />} />
      <Route path="/todomate" element={<ToDoMate />} />
    </Routes>
  )
}

export default App
