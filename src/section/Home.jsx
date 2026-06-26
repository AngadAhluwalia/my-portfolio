import ParticlesBackground from "../components/ParticlesBackground"
export default function Home(){
  return(
    <section id="home" className="w-full h-screen rellative bg-black overflow-hidden ">
      <ParticlesBackground/>
      <div className="absolute isnet-0">
        <div className="absolute -top-32 -left-32 w[70vw]sm:w-[z-500vw] md:w-[40vw]"></div>
        <div></div>
      
    </div>
    </section>
    
  )
}