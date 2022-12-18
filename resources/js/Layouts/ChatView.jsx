import IconScroll from '@/Components/IconScroll';
import React, { useState, useEffect } from 'react';
export default function ChatView() {
    return (
        <div className="static mb-20 mx-6 flex flex-col">
                <div className='h-16 m-6 w-1/2 bg-slate-500/50 dark:bg-gray-800 rounded-lg'>
                    <p className='text-xs text-neutral-900 dark:text-neutral-200 p-2'> TEXT TEST</p>
                </div>
                <div className='h-16 m-6 w-1/2 bg-gray-500/50 dark:bg-gray-800 rounded-lg'>
                    <p className='text-xs text-neutral-900 dark:text-neutral-200 p-2'> TEXT TEST</p>
                </div>  
        </div>
    )
}