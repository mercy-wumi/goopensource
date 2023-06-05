export const Header = () => {
    return (
        <div className='bg-slate-900'>
            <div className='relative w-full md:flex justify-between items-center text-white p-16 max-w-[1400px] mx-auto'>
                <p className='hidden md:block text-4xl lg:text-5xl w-2/3 lg:w-7/12 xl:w-1/2 font-semibold'>
                    <span className='text-slate-500'>A Frontend Engineer</span> passionate about building things on the web
                    </p>
                <div className='absolute top-8 md:top-36 right-8 md:right-16 text-white'>
                    <div className='w-28 h-28 md:w-40 md:h-40 rounded-full border-white border-[2px] object-cover bg-[url("../images/arts.jpg")]'>
                    </div>
                    <p className='font-semibold text-xl md:text-3xl'>mercy-wumi</p>
                    <div className='flex justify-evenly text-xs mt--3'>
                        <a href='mercy-portfolio.vercel.app' target='_blank'>Portfolio</a>
                        <span>59 repos</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
