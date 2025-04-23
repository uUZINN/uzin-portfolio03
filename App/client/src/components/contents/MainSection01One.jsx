import React, { useEffect } from 'react'
import mobile01 from '../../assets/img/mobile01.png';
import mobile02 from '../../assets/img/mobile02.png';
import macbook from '../../assets/img/Macbook.png';
import { timeLine } from '../../assets/js/timeLine';
import imagesLoaded from 'imagesloaded';


const MainSection01One = () => {

    useEffect(() => {
        const target = document.getElementById('mainMobile')

        imagesLoaded(target, { background: true }, () => {
            timeLine()
        })
    }, [])

    return (
        <div id="mainMobile" className="main_mobile">
            <div className="mobile_ani">
                <div className="mobile01">
                    <img className="i1" src={mobile02} alt="" aria-hidden="true" />
                </div>
                <div className="macbook">
                    <img className="i2" src={macbook} alt="" aria-hidden="true" />
                </div>
                <div className="mobile02">
                    <img className="i3" src={mobile01} alt="" aria-hidden="true" />
                </div>
            </div>

        </div>


    )


}

export default MainSection01One