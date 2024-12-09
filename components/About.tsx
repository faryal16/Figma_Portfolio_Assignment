import Image from "next/image";

const About = () => {
  return (
    <div className="flex items-center justify-center md:flex-row flex-col">
      {/* image */}
      <div className="w-full ">
        <Image src="/images/about.png" alt="" className="" width={500}
        height={500} />
      </div>
      {/* content */}
      <div className="w-full text-center md:text-left ">
        <h3 className="md:text-2xl text-xl text-[#457B9D] mb-4 font-semibold">About</h3>
        <h1 className="md:text-5xl text-3xl mb-4 font-bold">ABOUT ME?</h1>
        <p className="md:w-[505px] md:text-left text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          vero, impedit nisi, enim architecto tempora similique culpa illo,
          consequuntur quis voluptas sit iusto expedita nam beatae! Sed, ipsum.
          Corrupti numquam debitis saepe nesciunt, qui labore veniam hic amet
          deleniti quod exercitationem ipsum aut possimus distinctio animi ad
          tempore! Deleniti nh dolorem ex, excepturi odit, reprehenderit nulla
          commodi facilis dolores quae porro enim, dolor culpa corrupti
          consequatur exercitationem tenetur ab nemo tempora voluptatum rerum
          laborum error quia neque. Beatae asperiores fuga reiciendis nisi,
          magni dolor perferendis laborum officia odit praesentium eos itaque
          dicta mollitia architecto quis, voluptates consequatur voluptatum
          labore recusandae ab.
        </p>
      </div>
    </div>
  );
};

export default About;
