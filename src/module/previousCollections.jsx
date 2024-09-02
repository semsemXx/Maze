import React from 'react'
import styles from "@/css/previousCollections.module.css";
import Collection from '@/components/Page/Collection';

export default function PreviousCollections() {
  return (
    <div className={styles.MainPreviousColl}>
     <div>
          <Collection season={1} 
          name1="Mateha1" path1="/ProductPage1" 
          name2="Mateha2" price2={40} path2="/ProductPage2"
          name3="Mateha3" price3={60} path3="/ProductPage3"
          name4="Mateha4" price4={70} path4="/ProductPage4"
          />
          <Collection season={2}
          name1="Mateha1" path1="/ProductPage1" 
          name2="Mateha2" price2={40} path2="/ProductPage2"
          name3="Mateha3" price3={60} path3="/ProductPage3"
          />
           <Collection season={3}
          name1="Mateha1" path1="/ProductPage1" 
          name2="Mateha2" price2={40} path2="/ProductPage2"
          />
           <Collection season={4} 
          name1="Mateha1" path1="/ProductPage1" 
          name2="Mateha2" price2={40} path2="/ProductPage2"
          name3="Mateha3" price3={60} path3="/ProductPage3"
          name4="Mateha4" price4={70} path4="/ProductPage4"
          name5="Mateha5" price5={80} path5="/ProductPage5"
          name6="Mateha6" price6={90} path6="/ProductPage6"
          name7="Mateha7" price7={100} path7="/ProductPage7"
          name8="Mateha8" price8={110} path8="/ProductPage8"

          />
     </div>
    </div>
  )
}
