"use client";
import classes from "@/css/navBar.module.css";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Mateha from '@/video/matehaVid.mp4';

const SIDE = "left";

export default function SheetSide() {
  return (
    <div className="grid grid-cols-2 gap-2 z-50">
      <Sheet>
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
              <button className={classes.LeftNavBut}>Men</button>
            </SheetTitle>
            <SheetTitle className="text-white">
              <button className={classes.LeftNavBut}>Women</button>
            </SheetTitle>
            <SheetTitle className="text-white">
              <button className={classes.LeftNavBut}>Accessories</button>
            </SheetTitle>
            <SheetTitle className="text-white">
              <button className={classes.LeftNavBut}>Collabs</button>
            </SheetTitle>
            <SheetTitle className="text-white">
              <button className={classes.LeftNavBut}>Whte</button>
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
