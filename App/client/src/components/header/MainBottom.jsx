import React, { useEffect } from 'react'
import { setFlowBanner } from '../../assets/js/setFlowBanner'
import { Link } from 'react-router-dom'
import mainEst from '../../assets/img/main_est.svg';
import mainBox from '../../assets/img/main_box.svg';
import mainBotBanner from '../../assets/img/main_bot_banner.png';

const MainBottom = () => {
    useEffect(() => {
        setFlowBanner()
    }, [])
    return (
        <div className="main_bottom">
            <div className="main_bottom01">
                <img className="w50" src={mainEst} alt="" aria-hidden="true" />
                <div className="flow_banner w50">
                    <ul className="list">
                        <li>frontend</li>
                        <li>developer</li>
                        <li>everylineof</li>
                        <li>codeyouwirte</li>
                        <li>isastory:make</li>
                    </ul>
                </div>
                <img src={mainBox} alt="" aria-hidden="true" />
            </div>
            <div className="main_bottom02">
                <div className="main_bottom02_title">
                    <p>INNOVATE CODE IN 2025.</p>
                    <ul>
                        <li><Link to="https://uzin-portfolio.kro.kr/">website</Link></li>
                        <li><Link to="https://github.com/uUZINN/uzin-portfolio03">interface</Link></li>
                        <li><Link to="https://www.figma.com/file/L1hcYmSqFK4uU2sJLz9dx1/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%8B%9C%EC%95%88-%EC%9E%91%EC%97%85?type=design&node-id=409%3A10&mode=design&t=qM0Ksax3QTF0fbr8-1">design</Link></li>
                    </ul>
                </div>
                <p className="ko">
                    이 포트폴리오는 기획, 디자인, 프론트엔드 개발, 서버 구축 및 배포까지 전 과정을 직접 수행하여 제작했습니다.<br />
                    This portfolio is fully designed, developed, and deployed by myself from scratch.
                </p>
            </div>
            <div className="main_bottom03">
                {/* <img src={mainBotBanner} alt="" aria-hidden="true" /> */}
                <div className="main_bottom03_text">
                    <Link to="https://github.com/uUZINN">
                        <p>GitHub Code History</p>
                        <p className="ko">Click to move</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MainBottom