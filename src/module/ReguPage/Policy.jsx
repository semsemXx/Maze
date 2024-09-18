import React from 'react'
import styles from  "@/css/policy.module.css"
export default function 
() {
  return (
    <div className={styles.policy}>
          <div className={styles.shipping}>
            <div className={styles.ship_Pol}>
            SHIPPING POLICY
            </div>
            <div className={styles.ship_Pol_Cont}>
            <li>Delivery? 2-3 days max.</li>
            <li>Shipping cost? You’ll see it at checkout, no surprises.</li>
            <li>Not in Tunisia? Hit us up by email.</li>
            <li>Something late? Send a polite email, don’t panic.</li>
            </div>
          </div>

          <div className={styles.refund}>
            <div className={styles.refund_Pol}>
            REFUND & RETURN
            </div>
            <div className={styles.refund_Pol_Cont}>
            No refunds. We said what we said.
            Wrong size? Mail us, and yeah, you’re covering the shipping.
            If we're out of stock, guess what? No exchange. Gift it, keep it as art, or cry about it.
            </div>
          </div>

          <div className={styles.payment}>
            <div className={styles.payment_Pol}>
            PAYMENT
            </div>
            <div className={styles.payment_Pol_Cont}>
            Cash to the delivery guy. Easy.
            </div>
          </div>

          <div className={styles.restock}>
            <div className={styles.restock_Pol}>
            NO RESTOCK POLICY
            </div>
            <div className={styles.restock_Pol_Cont}>
            No restocks. What’s gone is GONE.
            </div>
          </div>
     </div>
  )
}
