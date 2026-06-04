import '../App.css'
import arrow from '../assets/arrow.svg'
import whiteArrow from '../assets/whiteArrow.svg'
import iPhone1 from '../assets/iPhone1.svg'
import iPhone2 from '../assets/iPhone2.svg'
import process from '../assets/process.svg'
import taskFlow from '../assets/taskFlow.svg'
import color from '../assets/color.svg'
import playfair from '../assets/playfair.svg'
import poppins from '../assets/poppins.svg'
import typography from '../assets/typography.svg'
import onboarding from '../assets/onboarding.svg'
import home from '../assets/home.svg'
import allTasks from '../assets/allTasks.svg'
import calendar from '../assets/calendar.svg'
import editTask from '../assets/editTask.svg'
import newTask from '../assets/newTask.svg'
import profile from '../assets/profile.svg'
import { Link } from 'react-router-dom'
import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.css'
import { useState, useEffect } from 'react'

function ToDoMate() {
  const previews = [
    { src: onboarding, alt: 'onbooarding' },
    { src: home, alt: 'home' },
    { src: allTasks, alt: 'allTasks' },
    { src: calendar, alt: 'calendar' },
    { src: editTask, alt: 'editTask' },
    { src: newTask, alt: 'newTask' },
    { src: profile, alt: 'profile' },
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
      <h2><span style={{color: "#FEA8EC"}}>ToDoMate</span> App Design</h2>
      <div className="project-container">
        <div className="project-section">
          <h3>Overview</h3>
          <p>ToDoMate is a productivity mobile app designed to simplify daily task management through a clean and user-friendly interface. With a focus on simplicity and usability, the app helps users stay organized, manage schedules, and keep track of their activities more comfortably.</p>
        </div>
        <div className="section-wrapper">
          <div className="section-wrapper2">
            <div className="project-section">
              <h3>Problem Statement</h3>
              <p>Managing daily tasks, schedules, and personal plans can sometimes feel overwhelming, especially when multiple activities need to be organized at the same time. Without proper organization, important tasks can easily be forgotten, leading to stress and reduced productivity. Many people need a simple and comfortable way to keep track of their activities while staying focused on their daily goals. ToDoMate was designed to help users organize their daily tasks more easily through a clean, intuitive, and visually comfortable experience.</p>
            </div>
            <div className="project-section">
              <h3>Role</h3>
              <p>UI/UX Designer</p>
            </div>
            <div className="project-section">
              <h3>Design Thinking Process</h3>
              <img src={process} alt="Design Thinking Process" className="process" />
            </div>
            <div className="project-section">
              <h3>Task Flow</h3>
              <p>The process of creating new task</p>
              <img src={taskFlow} alt="Task Flow" className="task-flow" />
            </div>
          </div>
          <div className="mockup-container">
            <img src={iPhone1} alt="iPhone1" className="mockup" />
            <img src={iPhone2} alt="iPhone2" className="mockup" />
          </div>
        </div>
        <div className="project-section">
          <h3>Design System</h3>
          <div className="design-system">
            <div className="color">
              <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
                <div style={{width: "10px", height: "10px", backgroundColor: "var(--fifth-color)", borderRadius: "50%"}}></div>
                <p>Color Used</p>
              </div>
              <img src={color} alt="Color Used" className="color-todomate" />
            </div>
            <div className="typography">
              <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
                <div style={{width: "10px", height: "10px", backgroundColor: "var(--fifth-color)", borderRadius: "50%"}}></div>
                <p>Typography</p>
              </div>
              <img src={typography} alt="Typography" className="typography-todomate" />
            </div>
          </div>
        </div>
        <div className="project-section">
          <h3>Final Design</h3>
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
          <h2 style={{color: "#FEA8EC"}}>ToDoMate</h2> 
        </div>
        <div className="prev-next">
          <Link to="/foodies" className="prev"><p>Previous</p></Link>
          <Link to="/foodies" className="next"><p>Next</p></Link>
        </div>
      </div>
      <footer className="footer-project">
        <p>© 2026 Diva Maharani Adila. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default ToDoMate