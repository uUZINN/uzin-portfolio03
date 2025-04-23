import React from 'react'
import { Link } from 'react-router-dom'
import draw02Blue from '../../assets/img/draw02_blue.png';
import footLogoBlue from '../../assets/img/foot_logo_blue.png';

const MainSection05 = () => {
    return (
        <section id="mainSection" className="cont_container">
            <h3 className="cont_title">Please get in touch!</h3>
            <p className="cont_ment">I'm always here, waiting.</p>
            <p className="cont_ment en">by Euzin</p>
            <div className="infor_cont">
                <div className="infor_box">
                    <div className="infor_title">
                        <h4>information about me</h4>
                        <div className="ko">
                            Frontend Developer<br />
                            Web Publisher
                        </div>
                    </div>
                    <p className="ko">
                        NAME . 정유진<br />
                        EMAIL . <a href='mailto:dbwls9038@naver.com'>dbwls9038@naver.com</a><br />
                        GITHUB. <a href="https://github.com/uUZINN">https://github.com/uUZINN</a>
                    </p>
                    <div className="infor_btn">
                        <p className="en2">I'd love to connect.</p>
                        <Link to="mailto:dbwls9038@naver.com">Send email</Link>
                    </div>
                </div>
                <div className="infor_right">
                    <img className="bike_img" src={draw02Blue} alt="" aria-hidden="true" />
                    <img className="foot_logo" src={footLogoBlue} alt="" aria-hidden="true" />
                </div>
            </div>
        </section>
    )
}

export default MainSection05