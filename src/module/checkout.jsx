import React, { useState } from 'react';
import classes from '@/css/checkout.module.css';
import { useNavigate } from 'react-router-dom';
import shirt from '@/image/shirt.png';

export default function Checkout(){
    return(
        <div className={classes.Checkoutdiv}>
            <p className={classes.delevery}>Delivery</p>
            <div className={classes.inputdiv}>
                <input className={classes.fname} type="text" placeholder="First name" />
                <input className={classes.lname} type="text" placeholder="Last name" />
                <input className={classes.add} type="text" placeholder="Adress" />
                <input className={classes.appart} type="text" placeholder="Appartement" />
                <input className={classes.city} type="text" placeholder="City" />
                <input className={classes.code} type="text" placeholder="Postal code" />
                <input className={classes.phone} type="text" placeholder="Phone number" />
                <button className={classes.placeorder}>Place order</button>
                <p className={classes.payment}>Payment on delevery</p>
                <p className={classes.seeshipping}>See shipping and payment policy.</p>
                <p className={classes.copyright}>All rights reserved by MATEHA STREETWEAR.</p>
            </div>
            <div className={classes.sub}>
                <p className={classes.subtotal}>Subtotal: $0.00</p>
                
            </div>
        </div>
    )
}