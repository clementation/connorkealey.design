import { useState } from 'react'
import { motion } from 'framer-motion'

import styles from '../styles/index.module.css'

export default function Portfolio() {

  const TestSwitch = () => {
    const[switched, setSwitched] = useState(false)
    return(
        <div
        className={styles.testSwitch} 
        data-switched={switched} 
        onClick={() => {setSwitched(!switched)}}>
            <motion.div
            layout 
            className={styles.switchNob}>
              :(
            </motion.div>
        </div>
    )
  }

  const TestWord = () => {
    const[clicked, setClicked] = useState(false)
    return(
      <motion.div
      layout
      className={styles.testWord}
      data-clicked = {clicked}
      onClick={() => {console.log("clicked", clicked); setClicked(!clicked)}}
      >
        WORD
      </motion.div>
    )
  }

  return(
      <main>
        <h1>Portfolio Page Contents</h1>
        <TestSwitch />
        <TestWord />
      </main>
  )
}