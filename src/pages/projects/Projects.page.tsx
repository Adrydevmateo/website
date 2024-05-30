import { projects } from './Projects'
import './Projects.style.css'
import BaseLayout from '@layouts/Base.layout'
import { TProject } from './Projects.types';

export default function ProjectsPage() {

 function shuffle(array: Array<TProject>) {
  let currentIndex = array.length;
  let randomIndex;

  // While there are elements remaining to shuffle
  while (currentIndex !== 0) {

   // Pick a remaining element
   randomIndex = Math.floor(Math.random() * currentIndex);
   currentIndex--;

   // Swap it with the current element
   [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
 }

 const shuffledProjects = shuffle(projects.slice()); // Create a copy to avoid modifying original array

 return (
  <BaseLayout>
   <div id="projects-page">
    <div className="hero">
     <h2>Projects</h2>
    </div>
    <ul>
     {shuffledProjects.map(m => (
      <li key={m.id}>
       <div className="img-box">
        <img src={m.img} alt="project" width={100} height={100} loading='lazy' />
       </div>
       <div className="content">
        <div className="row-1">
         <h3>{m.title}</h3>
        </div>
        <div className="row-2">
         {m.technologies.map((t, i) => (
          <a key={i} href={t.link} target='_blank'>
           <strong>{t.name}</strong>
          </a>
         ))}
        </div>
        <div className="row-3">
         <a href={m.githubLink} target='_blank'>
          <strong>GitHub</strong>
         </a>
         <a href={m.websiteLink} target='_blank'>
          <strong>Website</strong>
         </a>
        </div>
       </div>
      </li>
     ))}
    </ul>
   </div>
  </BaseLayout>
 )
}