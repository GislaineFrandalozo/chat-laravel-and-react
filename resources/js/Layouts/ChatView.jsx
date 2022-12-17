import IconScroll from '@/Components/IconScroll';
import React, { useState, useEffect } from 'react';
export default function ChatView() {
    return (
        <div className="bg-blue-700 static dark:bg-blue-700 mb-20 mx-6 flex flex-col">
                <div className='h-16 m-6 w-1/2 dark:bg-red-700 rounded-lg'>
                    <p>TEXT TEST</p>
                </div>
                <div className='h-16 m-6 w-1/2 dark:bg-red-700 rounded-lg'>
                    <p>TEXT TEST</p>
                </div>  
        </div>
    )
}