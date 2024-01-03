import React, { useState } from 'react'
import Burger from './Burger'
import { AnimatePresence } from 'framer-motion';
import Stairs from './Stairs';
import Menu from './menu/Menu';

const MainHeader = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div>
      <div class="main_header">
        <div>
        <Burger openMenu={() => {setMenuIsOpen(true)}}/>
        </div>
       
       <AnimatePresence mode="wait">
            {
                menuIsOpen && <>
                <Stairs />
                <Menu closeMenu={() => {setMenuIsOpen(false)}}/>
                </>
            }
        </AnimatePresence>
        {/* <a href="#headInfo">
          <span class="ko">Introduce</span>
          INFO
        </a>  */}
        <p>AVAILABLE FOR COMMISSIONS 2024</p>
        <a href="#headWork">
          <span class="ko">Portfolio</span>
          WORK
        </a>
      </div>  
    </div>
    
  )
}

export default MainHeader