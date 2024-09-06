import React from "react";
import classes from "@/css/confirmaton.module.css";

export default function Confirmation(){
    return (
        <div className={classes.confirmdiv}>
            <p className={classes.order}>YOUR ORDER HAS BEEN PLACED SUCCESSFULLY</p>
            <img className={classes.maze} src="src\image\little-stars-down.png" alt="" />
            <p className={classes.soon}>We will call you soon to confirm your order</p>
        </div>
    )
}