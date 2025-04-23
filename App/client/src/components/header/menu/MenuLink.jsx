import React, { useRef } from 'react';
import styles from '../../../assets/css/section/menu.module.css';
import { motion } from 'framer-motion';
import { mountAnim, rotateX } from '../../../assets/js/anim.js';
import gsap from 'gsap';

const MenuLink = ({ data, index }) => {
  const { title, description, images } = data;
  const outer = useRef(null);
  const inner = useRef(null);

  const manageMouseEnter = (e) => {
    const bounds = e.target.getBoundingClientRect();
    if (e.clientY < bounds.top + bounds.height / 2) {
      gsap.set(outer.current, { top: '-100%' });
      gsap.set(inner.current, { top: '100%' });
    } else {
      gsap.set(outer.current, { top: '100%' });
      gsap.set(inner.current, { top: '-100%' });
    }
    gsap.to(outer.current, { top: '0%', duration: 0.3 });
    gsap.to(inner.current, { top: '0%', duration: 0.3 });
  };

  const manageMouseLeave = (e) => {
    const bounds = e.target.getBoundingClientRect();
    if (e.clientY < bounds.top + bounds.height / 2) {
      gsap.to(outer.current, { top: '-100%', duration: 0.3 });
      gsap.to(inner.current, { top: '100%', duration: 0.3 });
    } else {
      gsap.to(outer.current, { top: '100%', duration: 0.3 });
      gsap.to(inner.current, { top: '-100%', duration: 0.3 });
    }
  };

  return (
    <motion.div
      onMouseEnter={(e) => manageMouseEnter(e)}
      onMouseLeave={(e) => manageMouseLeave(e)}
      variants={rotateX}
      {...mountAnim}
      custom={index}
      className={styles.el}
    >
      <a href="/">{title}</a>
      <div ref={outer} className={styles.outer}>
        <div ref={inner} className={styles.inner}>
          {[...Array(2)].map((_, index) => {
            return (
              <div key={index} className={styles.container}>
                <div className={styles.imageContainer}>
                  <img src={`${images[0]}`} fill alt="" aria-hidden="true" />
                </div>
                <p>{description}</p>
                <div className={styles.imageContainer}>
                  <img src={`${images[1]}`} fill alt="" aria-hidden="true" />
                </div>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default MenuLink;