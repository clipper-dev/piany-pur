import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import styles from './Arrow.module.css'

export default function Arrow() {
  return (
    <div className={styles.container}>
       <FaArrowDown className={styles.arrow}/>
    </div>
  )
}