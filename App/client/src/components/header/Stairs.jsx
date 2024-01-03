import React from 'react';
import styles from '../../assets/css/section/staire.module.css';
import { height, background, mountAnim } from '../../assets/js/anim.js';
import { motion } from 'framer-motion';

const Stairs = () => {
  return (
    <motion.div className={styles.stairs}>
      {[...Array(5)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={height}
            {...mountAnim}
            custom={4 - index}
            className={styles.stair}
          ></motion.div>
        );
      })}
      <motion.div variants={background} {...mountAnim} className={styles.background}></motion.div>
    </motion.div>
  );
};

export default Stairs;