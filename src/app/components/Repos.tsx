import React from 'react'
import { Filter } from './Filter'
import { RepoInsight } from './RepoInsight'

export const Repos = () => {
    return (
        <div className='bg-slate-800'>
            <div className='bg-slate-800 text-white pt-20 p-4 md:p-16 max-w-[1400px] mx-auto'>
                <Filter />
                <div className='mt-8 flex'>
                    <div className='lg:w-2/3 xl:mr-20'>
                        <RepoInsight />
                        <RepoInsight />
                        <RepoInsight />
                    </div>
                    <div className='hidden lg:block w-[400px] h-fit p-10 bg-blue-500 text-white text-base sticky top-1/4'>
                        This is a showcase of open source projects in React, NextJs, JavaScript, Typescript and lots more. Explore these projects and get started contributing to Open Source Project Today. I am open to collaborate on Open Source and Web development Projects.
                    </div>
                </div>
            </div>
        </div>
    )
}
