import './NavBar.style.css'
import { Link } from 'react-router-dom'
import { Home as HomeIcon, FolderOpenDot as ProjectsIcon, User as UserIcon } from 'lucide-react';

export default function NavBar() {
 return (
  <nav id='navbar'>
   <Link to="/contact"><UserIcon /></Link>
   <Link to="/projects"><ProjectsIcon /></Link>
   <Link to="/"><HomeIcon /></Link>
  </nav>
 )
}