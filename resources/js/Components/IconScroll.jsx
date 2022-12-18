import React, { useState, useEffect } from 'react';
export default function IconScroll() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        function handleScroll() {
          const windowScroll = window.scrollY ? window.scrollY : window.pageYOffset
          setScrollPosition(windowScroll);
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      console.log(scrollPosition)
      const movingStyle = {
          transform: `translateY(${scrollPosition}px)`
        };
        if(scrollPosition < 160){
            return (
                <div className="fixed bottom-20 right-2">
                <div className='
                    animate-bounce 
                    bg-slate-500/50 
                    dark:bg-slate-800 
                    p-2 w-10 h-10 ring-1 
                    ring-slate-200/20 
                    dark:ring-slate-900/5 
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
                 </div>
            )
        }
        }