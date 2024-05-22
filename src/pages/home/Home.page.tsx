import Skills from '@components/skills/Skills.component'
import './Home.style.css'
import BaseLayout from '@layouts/Base.layout'
import { Download as DownloadIcon, Phone as PhoneIcon, Mail as MailIcon, BookUser as BookUserIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import SocialMedia from '@components/social-media/Social-Media.component'
import ProgrammerGIF from '@/assets/giphy.gif'

export default function HomePage() {

 const [isMobile, setIsMobile] = useState(false)

 useEffect(() => {
  const HandleResize = () => {
   if (innerWidth < 900) return setIsMobile(true)
   setIsMobile(false)
  }

  HandleResize()

  window.addEventListener('resize', HandleResize)

  return () => window.removeEventListener('resize', HandleResize)
 }, [])

 return (
  <BaseLayout>
   <div id="home-page">
    {isMobile ? <Mobile isMobile={isMobile} /> : <Desktop isMobile={isMobile} />}
   </div>
  </BaseLayout>
 )
}

function Mobile({ isMobile }: { isMobile: boolean }) {
 return (
  <div className='mobile'>
   <div className='hero'>
    <img src={ProgrammerGIF} alt="programmer gif" width={240} />
    <h2>Adry Dev</h2>
    <h3>Web Developer</h3>
   </div>
   <Skills align='center' justify='center' screen={isMobile ? 'mobile' : 'desktop'} />
   <SocialMedia justify='center' />
   <a className='primary-button' href="https://docs.google.com/document/d/1GBvFVamPJFWJIbwOosse8WP1bewsvV2FmsdhoGYxjdg/edit?usp=sharing" target='_blank'>
    <DownloadIcon width={18} height={18} />
    Download CV
   </a>
  </div>
 )
}

function Desktop({ isMobile }: { isMobile: boolean }) {
 return (
  <div className='desktop'>
   <div className='hero'>
    <img src={ProgrammerGIF} alt="programmer gif" width={240} />
    <div className='content'>
     <div className='i-am'>
      <h1>Adry Dev</h1>
      <h3>Web Developer</h3>
      <SocialMedia />
     </div>
     <div className="contact">
      <a href="tel:+1(829)2758177" target='_blank'>
       <PhoneIcon />
       <strong>+1(829)-275-8177</strong>
      </a>
      <a href="mailto:adrydev@gmail.com" target='_blank'>
       <MailIcon />
       <strong>adrydevmateo@gmail.com</strong>
      </a>
      <a href="https://maps.app.goo.gl/817z41r7FcQRJ43p9" target='_blank'>
       <BookUserIcon width={innerWidth > 1050 ? 30 : 40} />
       <strong>Las Cayenas 8, San Isidro, Santo Domingo Este, Dominican Republic</strong>
      </a>
     </div>
    </div>
   </div>
   <div className='who-am-i'>
    <div className='skills'>
     <h3>Skills</h3>
     <Skills screen={isMobile ? 'mobile' : 'desktop'} />
    </div>
    <div className='about'>
     <h3>About</h3>
     <p>
      I'm a passionate front-end developer with a year of experience building user-friendly and responsive web interfaces. I'm proficient in the core technologies of HTML, CSS, and JavaScript, and I'm eager to expand my knowledge in frameworks and libraries.
     </p>
    </div>
   </div>
   <div className='experience'>
    <h3>Experience</h3>
    <ul>
     <li>
      <h4>Web Developer Intern | ATDEV | Dominican Republic | May 2024 - July 2024</h4>
      <p>
       I was trained by a tech lead, a senior full-stack developer, and was working and learning with a UI/UX and QA who guided me through the process of becoming a web developer capable enough to do the job and be admitted by the company.</p>
     </li>
     <li>
      <h4>Front End Developer | ATDEV | Dominican Republic | May 2024 - TODAY</h4>
      <p>In this company, I've had the opportunity to dive into the world of web development, working on projects that range from building user interfaces to implementing interactive features.</p>
     </li>
    </ul>
   </div>
  </div>
 )
}