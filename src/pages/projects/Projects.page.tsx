import './Projects.style.css'
import BaseLayout from '@layouts/Base.layout'

type TProject = {
 id: number,
 title: string,
 description: string,
 year: string,
 technologies: Array<{ name: string, link: string }>,
 githubLink: string,
 websiteLink: string
}

export default function ProjectsPage() {

 const projects: Array<TProject> = [
  {
   id: 0,
   title: 'Notes',
   description: 'Designed to keep your ideas organized.',
   technologies: [
    { name: 'React', link: 'https://react.dev/' },
    { name: 'TypeScript', link: 'https://www.typescriptlang.org/' },
    { name: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' }
   ],
   year: '2024',
   githubLink: 'https://github.com/Adrydevmateo/notes-app',
   websiteLink: 'https://notes-adrydev.netlify.app/'
  },
 ]

 return (
  <BaseLayout>
   <div id="projects-page">
    <div className="hero">
     <h2>Projects</h2>
    </div>
    <ul>
     {projects.map(m => (
      <li key={m.id}>
       <div className='rows'>
        <div className="row-1">
         <p>{m.year}</p>
        </div>
        <div className="row-2">
         <h3>{m.title}</h3>
         <p>{m.description}</p>
        </div>
        <div className="row-3">
         <h4>Technologies</h4>
         <div className="technologies">
          {m.technologies.map((t, i) => (
           <a key={i} href={t.link} target='_blank'>
            <strong>{t.name}</strong>
           </a>
          ))}
         </div>
        </div>
       </div>
       <div className="repo-site">
        <a href={m.githubLink} target='_blank'>
         <strong>GitHub</strong>
        </a>
        <a href={m.websiteLink} target='_blank'>
         <strong>Website</strong>
        </a>
       </div>
      </li>
     ))}
    </ul>
   </div>
  </BaseLayout>
 )
}