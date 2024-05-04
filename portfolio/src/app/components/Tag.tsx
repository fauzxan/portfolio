'use client';
import { useState, useEffect } from "react"

export default function Tag(content: {content: string}){
    const [color, setColor] = useState("black");
    useEffect(()=>{
        const setColorBasedOnText = () => {
            const lowercaseText = content.content.toLowerCase();
            // Logic to determine color based on lowercase text
            if (lowercaseText.includes('systems')) {
                setColor('blue-500');
            } else if (lowercaseText.includes('networks')) {
                setColor('green-500');
            } else if (lowercaseText.includes('artificial')) {
                setColor('yellow-500');
            } else if (lowercaseText.includes('mobile development')) {
                setColor('green-300');
            } 
            else {
                setColor('black');
            }
        }

        setColorBasedOnText();
        
    }, [content])
    
    return (
        // Add color, hover effect, interactivity later
        <div className="flex flex-wrap">
        <div className={`inline-block p-1 mb-2 border-1 bg-${color} text-white rounded-lg md:text-xs lg:text-xs min-w-min min-h-min`}>
            {content.content}
        </div>
        </div>
    )
}