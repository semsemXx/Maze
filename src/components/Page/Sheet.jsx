"use client";
import classes from "@/css/navBar.module.css"
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

export  default function SheetSide() {
  return (   
    <div className="grid grid-cols-2 gap-2 z-50	">
      <Sheet>
        <SheetTrigger asChild>
          <Button className={classes.containerBars}>
          <button className={classes.bars}><i class="fa-solid fa-bars"></i></button>
          </Button>
        </SheetTrigger>
        <SheetContent side={SIDE} className = "bg-black">
        <video className={classes.videoNav} autoPlay loop muted playsInline>
        <source src={Mateha} type="video/mp4" />
        </video>
          <div className="space-y-5 mt-40 p-4">
        <SheetTitle className = "text-white"><button  className={classes.LeftNavBut}>Men</button></SheetTitle>
        <SheetTitle className = "text-white"><button  className={classes.LeftNavBut}>Women</button></SheetTitle>
        <SheetTitle className = "text-white"><button  className={classes.LeftNavBut}>Accessories</button></SheetTitle>
        <SheetTitle className = "text-white"><button  className={classes.LeftNavBut}>Collabs</button></SheetTitle>
        <SheetTitle className = "text-white"><button  className={classes.LeftNavBut}>Whte</button></SheetTitle>
        </div>
          <SheetFooter>
            <SheetClose asChild>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
