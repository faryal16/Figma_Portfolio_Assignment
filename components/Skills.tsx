import Image from "next/image"


const Skills = () => {
  return (
    <div className="h-auto md:h-[80vh] flex flex-col justify-center items-center gap-8 py-8 md:gap-12 bg-[#d8e7ec] " >
            {/* heading Section */}
        <div className="flex flex-col md-gap-8 gap-4 items-center text-center px-4 ">
        <h2 className="text-xl md:text-2xl font-bold text-[#457B9D]">Skills</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-black">What I am capable of?</h1>
            
        </div>
        
        {/* skills icon */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 px-4">
            <Image src="/images/logo_html 1.png" alt="" width={100} height={50} />
            <Image src="/images/CSS-Logo 1.png" alt="" width={100} height={45} />
            <Image src="/images/ts.png" alt="" width={100} height={65} />
            <Image src="/images/tailwindcss-logo 1.png" alt="" width={100} height={60} />
            <Image src="/images/next.png" alt="" width={100} height={60} />
            <Image src="/images/react.png" alt="" width={100} height={60} />
        </div>
    </div>
  )
}

export default Skills