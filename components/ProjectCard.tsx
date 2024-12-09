"use client";


import Link from "next/link";



const projects = [
  {
    num: "01",
    caterogy: "frontend",
    title: "MyOnlineMeal",
    description:
      "Food Delivery app by HTML, CSS and Javascript.Best food delivery app freelance services online. Outsource your food delivery app project and get it quickly done and delivered remotely online.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/images/project1.png",
    live: "https://my-online-meal-delivery-app.vercel.app/",
    github: "https://github.com/faryal16/MyOnlineMeal.git",
  },
  {
    num: "02",
    caterogy: "frontend",
    title: "Static Resume",
    description:
      "A static resume focuses on top skills, and is tailored to the roles you are seeking. experience in retail and consistent record of advancement to leadership positions.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/images/project2.png",
    live: "https://milestone-1-static-resume.vercel.app/",
    github: "https://github.com/faryal16/milestone-1-Static_Resume.git",
  },
  {
    num: "03",
    caterogy: "frontend",
    title: "Dynamic Resume Builder",
    description:
      "The goal of Online Resume Builder is to automate the existing manual system using computerised equipment and full- featured computer software to meet their needs, so that their valuable data/information may be stored in the System for a long time with very easy access and manipulation.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/images/project3.png",
    live: "https://milestone02-dynamic-resume-builder.vercel.app/",
    github: "https://github.com/faryal16/Milestone02-Dynamic-resume-builder.git",
  },
  {
    num: "04",
    caterogy: "fullstack",
    title: "ToDo List App",
    description:
      "No matter who you are and what you do - you will be better organized! At home, at work and in your free time - you will focus on really important things!",
      stack: [{ name: "Typescript" }],
    image: "/assets/images/project4.png",
    live: "npx todos_list_007",
    github: "https://github.com/faryal16/My_TODO-s_list_007.git",
  },
  {
    num: "05",
    caterogy: "frontend",
    title: "Currency Converter",
    description:
      "Online program where currency values can be easily converted based on current exchange rates. A currency converter app can help users convert a currency into multiple currencies simultaneously..",
    stack: [{ name: "Typescript" }],
    image: "/assets/images/projects5.jpg",
    live: "npx currency_converter_007",
    github: "https://github.com/faryal16/Currency_Converter_007.git",
  },
  {
    num: "06",
    caterogy: "frontend",
    title: "Portfolio",
    description:
      "My personal portfolio make by me using fontend programming languages.",
      stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/images/project6.png",
    live: "https://portfolio-website-by-fairy.vercel.app/",
    github: "https://github.com/faryal16/Portfolio_Website_by_Fairy.git",
  },
];

const ProjectCard = () => {
  
  return (
    <div className="px-5 sm:px-10 md:px-28">
        <ul className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center">
            {projects.map((project) => (
                <li className="shadow-xl rounded-md flex flex-col cursor-pointer lg:h-[300px] md:h-[280px] overflow-hidden" key={project.num}>
                    {/* Image */}
                    <div 
                    className="h-[200px] w-full border-b border-black"
              style={{
                background: `url(${project?.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}>
                    </div>
                    {/* content */}
                    <div className="p-5 flex flex-col">
                        <h1 className="text-lg sm:text-xl font-bold text-center">
                            {project.title}
                        </h1>
                        <p className="text-sm sm:text-base text-gray-500 text-justify">
                            {project.description}
                        </p>
                        <div className="flex gap-5 mt-4">
                            <Link href={project.github || '/'} className="text-[#457B9D] text-sm sm:text-base" >GitHub</Link>
                            <Link href={project.live || '/'} className="text-[#457B9D] text-sm sm:text-base" >Live View</Link>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default ProjectCard;
