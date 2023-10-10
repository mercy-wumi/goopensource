import Filter from "../components/Filter";
import ProjectRepo from "../components/ProjectRepo";

export default function Explore() {
  return (
    <main>
      <div className="bg-slate-900">
        <div className="w-full md:flex justify-between items-center text-white p-16 max-w-[1400px] mx-auto">
          <p className="hidden md:block text-4xl lg:text-5xl w-2/3 lg:w-7/12 xl:w-1/2 font-semibold">
            <span className="text-slate-500">A Frontend Engineer</span>{" "}
            passionate about building things on the web
          </p>
          <div className="absolute top-8 md:top-36 right-8 md:right-16 text-white">
            <div className='w-28 h-28 md:w-40 md:h-40 rounded-full border-white border-[2px] object-cover bg-[url("../public/arts.jpg")]'></div>
            <p className="font-semibold text-xl md:text-3xl">mercy-wumi</p>
            <div className="flex justify-evenly text-xs mt--3">
              <a href="mercy-portfolio.vercel.app" target="_blank">
                Portfolio
              </a>
              <span>59 repos</span>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-slate-800'>
            <div className='bg-slate-800 text-white pt-20 p-4 md:p-16 max-w-[1400px] mx-auto'>
                <Filter />
                <div className='mt-8 flex'>
                    <div className='lg:w-2/3 xl:mr-20'>
                        <ProjectRepo />
                        <ProjectRepo />
                        <ProjectRepo />
                    </div>
                    <div className='hidden lg:block w-[400px] h-fit p-10 bg-blue-500 text-white text-base sticky top-1/4'>
                        This is a showcase of open source projects in React, NextJs, JavaScript, Typescript and lots more. Explore these projects and get started contributing to Open Source Project Today. I am open to collaborate on Open Source and Web development Projects.
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
