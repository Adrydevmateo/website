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
   title: 'E-commerce Website',
   description: 'Shopping',
   technologies: [{ name: 'react', link: 'https://react.dev/' }],
   year: '2024',
   githubLink: '',
   websiteLink: ''
  },
  {
   id: 1,
   title: 'E-commerce Website',
   description: 'Shopping',
   technologies: [{ name: 'react', link: 'https://react.dev/' }],
   year: '2024',
   githubLink: '',
   websiteLink: ''
  }
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
       <div className="row-1">
        <p>{m.year}</p>
       </div>
       <div className="row-2">
        <h3>{m.title}</h3>
        <p>{m.description}</p>
       </div>
       <div className="row-3">
        <h4>Main Technologies</h4>
        <div className="technologies">
         {m.technologies.map((t, i) => (
          <a key={i} href={t.link} target='_blank'>
           <strong>{t.name}</strong>
          </a>
         ))}
        </div>
       </div>
       <div className="row-4">
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