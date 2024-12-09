import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div className='py-10  lg:h-[150vh] md:h-[150vh] flex flex-col justify-center items-center gap-10 '>
         {/* heading Section */}
         <div className="flex flex-col md-gap-8 gap-4 items-center text-center px-4 ">
        <h2 className="text-xl md:text-2xl font-bold text-[#457B9D]">Projects</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-black">What I have made?</h1>
            
        </div>
<div className="">
    <ProjectCard/>
</div>
    </div>
  )
}

export default Project