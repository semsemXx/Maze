import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import classes from "@/css/admindash.module.css";
import LoadingPage from '@/components/Page/loadingPage';

export default function Admindash() {
    const [inputValue, setInputValue] = useState("");
    const [isVisible, setIsVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [showNewContent, setShowNewContent] = useState(false);
    const scrollRef = useRef(null);
    const navigate = useNavigate(); 

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

    const handleCardClick = (path) => {
        navigate(path); 
    };

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
                            <div className={classes.cardsContainer}>
                                <div className={classes.card} onClick={() => handleCardClick("/cms")}>
                                    <h3>CMS</h3>
                                </div>
                                <div className={classes.card} onClick={() => handleCardClick("/orders")}>
                                    <h3>Orders</h3>
                                </div>
                                <div className={classes.card} onClick={() => handleCardClick("/charts")}>
                                    <h3>Charts</h3>
                                </div>
                            </div>
                            <img src="src\\image\\little-stars-down.png" alt="" className={classes.star} />
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
