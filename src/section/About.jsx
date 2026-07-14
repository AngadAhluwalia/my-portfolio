import {motion} from "framer-motion";
import React from "react";  
import p from "../assets/boy.JPG"


export default function About() {
  const stats=[
    {label:"Experience",value:"1+"},
    {label:"Speciality",value:"Full Stack Development"},
    {label:"Focus",value:"Performance & Scalability"},

  ]
  const glows=[
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px] ",
    "-bottom-0 -right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300 ","top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[220px] h-[220px] opacity-10 blur-[100px] "
  ]
  return (
    <section id="about" className="w-full min-h-screen relative items-center justify-center bg-black text-white overflow-hidden flex">
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c,i)=>(
          <div key={i} className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c}`}></div>
        ))}
      </div>
      <div className="relative z-10 max-w-6xl w-full mx-auto px-6  md:px-10 lg:px-12 py-20 flex flex-col  gap-12">

      
      <motion.div className="flex flex-col md:flex-row items-center md:items-strech gap-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}>
          <motion.div className="relative w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-[#1cd8d2]/20 to-[#302b63]/20 border border-[#1cd8d2]/25">
            <img src={p} alt="profile" className="absolute inset-0"></img>
          </motion.div>
          <div className="flex-1-flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]">
              Angad Ahluwalia
            </h2>
            <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">
              Full Stack Developer
            </p>
            <p className="mt-4 text-grey-300 text-base sm:text-lg max-w-2xl md:max-w-3xl">
              I build scaleable,modern and responsive web applications using the latest technologies. I have a passion for creating beautiful and functional user interfaces, and I am always looking for new challenges to improve my skills.
            </p>
            <div>
              {stats.map((item,i)=>(
                <motion.div key={i} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center
                "
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i , duration: 0.4 }}
                viewport={{ once: true, amount: 0.4 }}>
                 <div  className=" text-sm text-grey-400">{item.label}</div>
                 <div className="text-base font-semibold">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </div>

      </motion.div>
      </div>




    </section>
  )}
    
