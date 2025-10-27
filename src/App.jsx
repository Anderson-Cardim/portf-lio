
import Presentation from "./components/Presentation/index.jsx"
import './App.css'
import Header from "./components/Header/index.jsx"
import Abount from "./components/Abount/index.jsx"
import Project from "./components/Project/index.jsx"
import Skills from "./components/Skills/index.jsx"
import Contact from "./components/Contact/index.jsx"
import Footer from "./components/Footer/index.jsx"


function App() {

  return (
    <>
      <Header/>
       <Presentation/>
       <Abount/>
       <Project/>
       <Skills/>
       <Contact/>
       <Footer/>
    </>
  )
}

export default App
