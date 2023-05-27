import React from 'react'
import Image from 'next/image'
import can from '../images/can.jpg'

export const RepoInsight = () => {
    return (
        <div className='md:flex shadow-lg px-4 mb-16'>
            <div className='w-[80px] h-[80px] md:w-[200px] md:h-[200px] mr-4'>
                <Image src={can} alt='github profile' className='rounded-full object-cover' />
            </div>
            <div className='xl:mr-16'>
                <p className='font-semibold text-2xl mb-4'>Accessibility Insights</p>
                <span className=''>Accessibility Insights is a suite of open source tools that help developers find and fix accessibility issues in Web, Windows and Android applications.</span>
                <div className='flex mt-4 justify-between'>
                    <div>
                        <button className='border rounded-lg px-2 py-1 mr-2 text-xs md:text-base'>React</button>
                        <button className='border rounded-lg px-2 py-1 mr-2 text-xs md:text-base'>NextJs</button>
                        <button className='border rounded-lg px-2 py-1 mr-2 text-xs md:text-base'>TypeScript</button>
                    </div>
                    <button className='rounded-lg px-2 py-1 mr-2 text-xs md:text-base bg-blue-500'>Learn More</button>
                </div>
            </div>
        </div>
    )
}
