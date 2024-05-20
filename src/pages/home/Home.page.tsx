import Skills from '@components/skills/Skills.component'
import './Home.style.css'
import BaseLayout from '@layouts/Base.layout'
import { Download as DownloadIcon, Phone as PhoneIcon, Mail as MailIcon, BookUser as BookUserIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import SocialMedia from '@components/social-media/Social-Media.component'


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
    <img src="https://images.unsplash.com/photo-1715987587174-b8be6a743337?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={240} height={240} />
    <h2>Adry Dev</h2>
    <h3>Web Developer</h3>
   </div>
   <Skills align='center' justify='center' screen={isMobile ? 'mobile' : 'desktop'} />
   <SocialMedia justify='center' />
   <button className='primary-button' type='button'><DownloadIcon width={16} height={16} /> Download CV</button>
  </div>
 )
}

function Desktop({ isMobile }: { isMobile: boolean }) {
 return (
  <div className='desktop'>
   <div className='hero'>
    <img src="https://images.unsplash.com/photo-1715987587174-b8be6a743337?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={200} height={200} />
    <div className='content'>
     <h2>Adry Dev</h2>
     <h3>Web Developer</h3>
     <SocialMedia />
    </div>
   </div>
   <div className='who-am-i'>
    <div className='skill_contact'>
     <div className='skills'>
      <h3>Skills</h3>
      <Skills screen={isMobile ? 'mobile' : 'desktop'} />
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
       <BookUserIcon width={42} />
       <strong>Las Cayenas 8, San Isidro, Santo Domingo Este, Dominican Republic</strong>
      </a>
     </div>
    </div>
    <div className='about'>
     <h3>About</h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse in iure fuga magni praesentium, eius recusandae. Eveniet doloremque quaerat autem provident blanditiis obcaecati sint adipisci nulla ducimus, dolorum eum corporis.</p>
    </div>
   </div>
   <div className='experience'>
    <h3>Experience</h3>
    <ul>
     <li>
      <h4>Front End Developer | ATDEV | Dominican Republic | May 9, 2024</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis aspernatur officia illo. Voluptatem, enim explicabo. Ut, fugiat nemo </p>
     </li>
    </ul>
   </div>
  </div>
 )
}

