'use client'

import {useContext} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import can from '../../images/can.jpg'
import { ReposContext } from '@/app/context/ReposContext'

export const ModalRepo = () => {
    const {state: {openModal}} = useContext(ReposContext)
    console.log(openModal)
    return (
        <div className='bg-slate-100 w-screen h-screen z-30 flex text-white justify-center items-center'>
            <div className='w-1/2 bg-slate-900 p-8 rounded-lg'>
                <div className='flex'>
                <Image src={can} alt='repo profile' width='150' height='150' className='rounded-full' />
                <div>
                    <span>143 Issues</span>
                    <span>50 Stars</span>
                    <span>100 Fork</span>
                    <div>
                    <span className='border rounded-lg px-2 py-1 mr-2 text-xs md:text-base'>React</span>
                    <span className='border rounded-lg px-2 py-1 mr-2 text-xs md:text-base'>TypeScript</span>
                    <span className='border rounded-lg px-2 py-1 mr-2 text-xs md:text-base'>NextJs</span>
                    <span className='border rounded-lg px-2 py-1 mr-2 text-xs md:text-base'>JavaScript</span>
                </div>
                </div>
                </div>
                <p>Accessibility Insights is a suite of open source tools that help developers find and fix accessibility issues in Web, Windows and Android applications.</p>
            <Link href="/" className='border rounded-lg px-2 py-1 mr-2 text-xs md:text-base flex justify-end'>
            View
            </Link>
            </div>
        </div>
    )
}
