import Contacts from "./comp/Contacts"
import Home from "./comp/Home"
import Nav from "./comp/Nav"
import Projects from "./comp/Projects"
import Skills from "./comp/Skills"
import './App.css'
function App() {
  return (
    <main>
      <Nav/>
      <Home/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </main>
  )
}

export default App
