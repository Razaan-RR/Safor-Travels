import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Journey from '../components/sections/Journey'
import Destinations from '../components/sections/Destinations'
import CTA from '../components/sections/CTA'

function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Journey></Journey>
        <Destinations></Destinations>
        <CTA></CTA>
        <Footer></Footer>
    </div>
  )
}

export default Home