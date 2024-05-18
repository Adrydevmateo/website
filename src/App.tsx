import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/home/Home.page"
import ContactPage from "./pages/contact/Contact.page"
import ProjectsPage from "./pages/projects/Projects.page"

function App() {

 return (
  <>
   <Routes>
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/projects" element={<ProjectsPage />} />
    <Route path="/" element={<HomePage />} />
   </Routes>
  </>
 )
}

export default App
