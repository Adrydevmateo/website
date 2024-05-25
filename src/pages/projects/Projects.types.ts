export type TProject = {
 id: number,
 title: string,
 description: string,
 year: string,
 technologies: Array<{ name: string, link: string }>,
 githubLink: string,
 websiteLink: string
}