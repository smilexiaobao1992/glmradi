import Hero from "./components/hero"
import Feature from "./components/feature"
import About from "./components/about"
import Footer from "./components/footer"
import Cta from "./components/cta"
export default function Home(){
  return(
    <>
    <Hero/>
    <Cta/>
    <Feature/> 
    <About/> 
    <Footer/>
    </>
  )
 
}