import React, { useState, useEffect } from 'react';
export default function IconScroll() {

   
    return (
        <div className='
            animate-bounce 
            bg-white 
            dark:bg-slate-800 
            p-2 w-10 h-10 ring-1 
            ring-slate-900/5 
            dark:ring-slate-200/20 
            shadow-lg rounded-full 
            flex items-center 
            justify-center'
            
            >
            <svg 
                className="animate-bounce w-6 h-6 text-violet-500" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinejoin="round" 
                fill="none"
            
                >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
    )
}