"use client"
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"
import Image from "next/image"

export default function Home() {
  return (
    <section className="min-h-screen flex items-center  bg-[#d8e7ec] px-4 lg:px-24 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* text content */}
          <div className="text-center xl:text-left max-w-2xl">
            
            <h1 className="text-2xl  mt-24 md:text-4xl text-[#457B9D] mb-6">
              Hi Everyone, I am{" "}
              <span className="block mt-2 text-6xl text-black font-bold">
                Faryal Junaid
              </span>
            </h1>
            
            <p className="text-lg mb-8 text-black">
              Welcome to my portfolio!!
              showcasing my expertise and accomplishments.
              I&#39;ve developed a passion for delivering high-quality work
              that exceeds expectations.
            </p>

            {/* buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto bg-[#457B9D] text-white hover:scale-105 transition-transform"
              >
                <a href="/CV.pdf.pdf" className="flex items-center gap-2">
                  Download CV <FiDownload />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto  bg-[#457B9D]/10 hover:scale-105 transition-transform"
              >
                Explore More
              </Button>
            </div>
          </div>

          {/* image container */}
          <div className=" flex items-center justify-center w-full h-auto relative md:h-1/2 lg:mt-9  ">
           
           <div className="w-[200px] h-[200px] md:w-[360px] md:h-[310px] bg-[#457B9D] rounded-[30px] md:rounded-[40px] absolute flex items-center justify-center ">
            
           </div>
             <Image
              src="/images/dp.png" // Replace with your image path
              alt="Profile Image"
              width={300}
              height={600}
              className="z-10 md:mb-28 mb-8 rounded-2xl md:w-[350px] md:h-[470px] w-[250px] h-[280px]  "
              
              />
              
          </div>
        </div>
      </div>
      
    </section>
  );
}
