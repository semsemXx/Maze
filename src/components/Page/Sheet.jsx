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

const SIDE = "left";

export  default function SheetSide() {
  return (   
    <div className="grid grid-cols-2 gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button className={classes.containerBars}>
          <button className={classes.bars}><i class="fa-solid fa-bars"></i></button>
          </Button>
        </SheetTrigger>
        <SheetContent side={SIDE} className="bg-black">
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
