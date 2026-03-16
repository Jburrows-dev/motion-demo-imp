"use client"
import Link from "next/link";
const baseImgPath = process.env.NODE_ENV == 'development'
    ? ''    
    : '/motion-demo'; 

import { useState } from 'react';
import { motion } from 'motion/react';

export default function Nav() {
    const [isLight, setIsLight] = useState(true);
    const toggleDarkMode = () => {
        if (document.documentElement.getAttribute('data-theme') == 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        setIsLight(isLight => !isLight)
    };
    return(
        <div>
            <nav>
            <motion.p whileTap={ { scale: 0.9} }>
                <a> Po Ping </a>
            </motion.p>            <button 
                style={{
                    justifyContent: "flex-" + (isLight ? "start" : "end"),
                }}
                onClick={toggleDarkMode}> 
                <motion.div 
                    className="toggleBall"
                    layout
                    transition = {{
                        type: "spring",
                        stiffness: 700,
                        damping: 50,
                    }}
                />
            </button>
            </nav>
        </div>
    );
}
