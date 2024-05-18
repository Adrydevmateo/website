import './Base.style.css'
import { ReactNode } from 'react'
import NavBar from '@components/navigation/NavBar.component'

export default function BaseLayout({ children }: { children: ReactNode }) {
 return (
  <div id='base-layout'>
   <div className='content'>
    {children}
   </div>
   <NavBar />
  </div>
 )
}