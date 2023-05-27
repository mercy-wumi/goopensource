import Image from 'next/image'
import arts from '../images/arts.jpg'
export const Header = () => {
    return (
        <div className='bg-slate-900'>
            <div className='relative w-full md:flex justify-between items-center text-white p-16 max-w-[1400px] mx-auto'>
                <p className='text-5xl w-1/2 font-semibold'><span className='text-slate-500'>A Frontend Engineer</span> passionate about building things on the web</p>
                <div className='absolute top-36 right-16 text-white'>
                    <div className='w-40 h-40 rounded-full border-white border-[2px] object-cover bg-[url("../images/arts.jpg")]'>
                    </div>
                    <p className='font-semibold text-3xl'>mercy-wumi</p>
                    <div className='flex justify-evenly text-xs mt--3'>
                        <a href='mercy-portfolio.vercel.app' target='_blank'>View Portfolio</a>
                        <span>59 repos</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
