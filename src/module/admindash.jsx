import React, { useState, useEffect, useRef } from 'react';
import classes from "@/css/admindash.module.css";
import LoadingPage from '@/components/Page/loadingPage';

export default function Admindash() {
    const [inputValue, setInputValue] = useState("");
    const [isVisible, setIsVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [showNewContent, setShowNewContent] = useState(false); 
    const scrollRef = useRef(null);

    useEffect(() => {
        if (inputValue.toLowerCase() === "maze") {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                setIsVisible(false);
                setShowNewContent(true); 
            }, 2000);
        }
    }, [inputValue]);

    return (
        <div className={classes.Div}>
            {isLoading ? (
                <LoadingPage />
            ) : (
                <>
                    {isVisible && (
                        <>
                            <img src="src\\image\\Mazedash.jpg" alt="" className={classes.maze} />
                            <img src="src\\image\\little-stars-down.png" alt="" className={classes.star} />
                            <input 
                                type="text" 
                                placeholder="Your maze code here" 
                                className={classes.code} 
                                value={inputValue} 
                                onChange={(e) => setInputValue(e.target.value)} 
                            />
                        </>
                    )}

                    {showNewContent && (
                        <div ref={scrollRef} className={classes.newContent}>
                            <p className={classes.welc}>Welcome to your admin dashboard!</p>
                            <p></p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
