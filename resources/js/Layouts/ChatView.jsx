import IconScroll from '@/Components/IconScroll';
import React, { useState, useEffect } from 'react';
export default function ChatView() {
    return (
        <div className="static h-full mb-20 mx-6 flex flex-col-reverse dark:bg-white">

                <div className='p-2 dark:bg-red-500'>
                    <div className='w-1/2 bg-slate-500/50 dark:bg-gray-800 rounded-t-lg rounded-r-lg'>
                        <p className='text-xs text-neutral-900 dark:text-neutral-200 p-2'> TEXT TEST</p>
                    </div>
                    <div>
                        <p>@exemploNameUser</p>
                    </div>
                </div>
                
                <div className='flex p-2 flex-row-reverse dark:bg-green-500'>
                    <div className='w-1/2 bg-gray-500/50 dark:bg-gray-800 rounded-t-lg rounded-l-lg'>
                        <p className='text-xs text-neutral-900 dark:text-neutral-200 p-2'> TEXT TEST</p>
                    </div> 
                </div>

                <div className='p-2 dark:bg-red-500'>
                    <div className='w-1/2 bg-slate-500/50 dark:bg-gray-800 rounded-t-lg rounded-r-lg'>
                        <p className='text-xs text-neutral-900 dark:text-neutral-200 p-2'> TEXT TEST</p>
                    </div>
                    <div>
                        <p>@exemploNameUser</p>
                    </div>
                </div>

        </div>
    )
}