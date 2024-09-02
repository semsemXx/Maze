import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classes from "@/css/navBar.module.css";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetFooter,
  SheetTitle
} from "@/components/ui/sheet";
import Mateha from '@/video/matehaVid.mp4';

const SIDE = "left";

export default function SheetSide() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); 

  const handleNavigation = (path) => {
    if (location.pathname === "/Login" && path === "/Previous-Collections") {
      setIsOpen(false);
      setTimeout(() => {
        navigate(path);
      }, 250); 
    } else {
      navigate(path);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (location.pathname === "/Previous-Collections") {
      setIsOpen(false);
    }
  }, [location.pathname]);

  return (
    <div className="grid grid-cols-2 gap-2 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button className={classes.containerBars}>
            <button className={classes.bars}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </Button>
        </SheetTrigger>
        <SheetContent side={SIDE} className="bg-black flex flex-col justify-between">
          <video className={classes.videoNav} autoPlay loop muted playsInline>
            <source src={Mateha} type="video/mp4" />
          </video>
          <div className="space-y-5 mt-40 p-4">
            <SheetTitle className="text-white">
              <button
                className={classes.LeftNavBut}
                onClick={() => handleNavigation('/New-Collection')}
              >
                New Collection
              </button>
            </SheetTitle>
            <SheetTitle className="text-white">
              <button
                className={classes.LeftNavBut}
                onClick={() => handleNavigation('/Previous-Collections')}
              >
                Previous Collections
              </button>
            </SheetTitle>
            <SheetTitle className="text-white">
              <button
                className={classes.LeftNavBut}
                onClick={() => handleNavigation('/Our-Philosophy')}
              >
                Our Philosophy
              </button>
            </SheetTitle>
            <SheetTitle className="text-white">
              <button
                className={classes.LeftNavBut}
                onClick={() => handleNavigation('/Login')}
              >
                Login
              </button>
            </SheetTitle>
            <SheetTitle className="text-white">
              <button
                className={classes.LeftNavBut}
                onClick={() => handleNavigation('/Policies')}
              >
                Policies
              </button>
            </SheetTitle>
          </div>
          <SheetFooter className="flex flex-col items-center mb-4">
            <div className={classes.social}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f text-white text-2xl cursor-pointer"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram text-white text-2xl cursor-pointer"></i>
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-tiktok text-white text-2xl cursor-pointer"></i>
              </a>
            </div>
          </SheetFooter>
          <p className="text-white text-sm mb-5 ml-6">&copy; All rights are reserved Mateha Streetwear</p>
        </SheetContent>
      </Sheet>
    </div>
  );
}
