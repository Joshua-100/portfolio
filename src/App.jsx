import '../src/styles/styles.css';
import '../src/styles/mediaqueries.css';
import Footer from './components/footer';
import Header from './components/header';
import Profile from './components/profile';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';


function App() {

  return (
    <>
    <Header/>
    <Profile/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
