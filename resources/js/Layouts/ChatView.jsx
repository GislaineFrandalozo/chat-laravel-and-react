import IconScroll from '@/Components/IconScroll';
import React, { useState, useEffect } from 'react';
export default function ChatView() {
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
      const Icon = (
        <div style={movingStyle} className="absolute top-96 h-96 grid grid-cols-1 place-items-end right-2">
            <IconScroll />
        </div>
      )
        
    return (
        <div className="h-full bg-blue-700 static dark:bg-blue-700 mb-20 mx-6 flex justify-between">
            <div>
                <div className='h-16 m-6 w-1/2 dark:bg-red-700 rounded-lg'>
                    <p>TEXT TEST</p>
                </div>
                <div className='h-16 m-6 w-1/2 dark:bg-red-700 rounded-lg'>
                    <p>TEXT TEST</p>
                </div>
            </div>
            {scrollPosition < 160 && Icon}
            
        </div>
    )
}