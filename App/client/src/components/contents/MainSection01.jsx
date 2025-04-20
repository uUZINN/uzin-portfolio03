import React from 'react'
import { Link } from 'react-router-dom'
import draw01 from '../../assets/img/draw01.png';
import draw02 from '../../assets/img/draw02.png';
import port01 from '../../assets/img/port01.png';
import port02 from '../../assets/img/port02.png';
import port03 from '../../assets/img/port03.png';
import port04 from '../../assets/img/port04.png';
import port05 from '../../assets/img/port05.png';
import mobile01 from '../../assets/img/mobile01.png';
import mobile02 from '../../assets/img/mobile02.png';
import macbook from '../../assets/img/Macbook.png';

const MainSection01 = () => {

    window.onload = function () {
        document.querySelectorAll("a[href^='#']").forEach((anchor) => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();

                const targetId = this.getAttribute("href");
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            });
        });
    };

    return (
        <section id="mainSection" className="cont_container">
            <div id="headInfo" className="main_text parallax__item__desc">
                <h3>
                    <span className="reveal reveal_BTT split" data-delay="0.1">A PASSIONATE FRONT</span>
                    <span className="reveal reveal_BTT split" data-delay="0.3">END DEVELOPER WHO</span>
                    <span className="reveal reveal_BTT split" data-delay="0.5">IS ALWAYS LEARNING</span>
                    <span className="reveal reveal_BTT split" data-delay="0.7">AND GROWING!</span>
                </h3>
                <p className="ko">
                    안녕하세요.<br />
                    UI/UX 퍼블리셔로 시작해, 현재는 프론트엔드 개발자로 일하고 있습니다.<br />
                    3년 넘게 웹 프론트 영역에서 일하며, 효율적인 인터페이스 개발에 집중하고 있습니다.
                </p>
            </div>
            {/* <!-- // main_text --> */}

            <div className="main_intro parallax__item__desc">
                <div className="intro_word">
                    <ul>
                        <span className="en2">EXPERIENCE AND SKILLS</span>
                        <li>WEB PUBLISHING</li>
                        <li>PLANNING</li>
                        <li>MARKETING</li>
                    </ul>
                    <img className="draw_tall parallax__item__desc" src={draw01} alt="" />
                    <ul>
                        <span className="en2">ATTRIBUTE SCORES</span>
                        <li>WEB DEVELOP</li>
                        <li>skill boost</li>
                        <li>WEB DESIGN</li>
                    </ul>
                </div>
                <div className="intro_text">
                    <h3>v2.1(2K25)</h3>
                    <p className="en">by Euzin</p>
                    <p className="ko">
                        퍼블리셔로 시작해 프론트엔드 개발자로 커리어를 이어온 지 4년 차에 접어들었습니다.<br />
                        이제는 단순히 구현을 넘어서, 유지보수성과 사용자 흐름까지 고려하며 개발하려고 노력합니다.<br />
                        기획자·디자이너·백엔드 개발자와의 소통도 더 능숙해졌고, 협업 과정의 중요성을 매일 체감하고 있습니다.<br />
                        앞으로도 깊이 있는 기술 역량을 쌓고, 팀에 안정감 있는 구성원으로 기여하고 싶습니다.<br />
                        “Still learning. Still building. Always improving.”
                    </p>
                    <div className="ko add_text">
                        TAILORED HIGH-QUALITY WEB DEVELOPER
                        <Link className="en2" to="https://github.com/uUZINN">https://github.com/uUZINN</Link>
                    </div>
                </div>
            </div>
            {/* <!-- // main_intro --> */}

            <div id="headWork" className="main_work">
                <h3>work</h3>
                <div className="work_port">
                    <div className="work s1">
                        <h4>vue - portfolio site</h4>
                        <p className="ko">react, vue, vite, next를 이용하여 다양한 버전으로 제작해 본 포트폴리오 사이트 입니다.</p>
                        <div className="work_btn">
                            <Link to="https://vue-project2023.vercel.app/" target="_blank" className="ko">view</Link>
                            <Link to="https://github.com/uUZINN/vue-project2023" target="_blank" className="ko">code</Link>
                        </div>
                        <img src={port01} alt="" />
                    </div>
                    <div className="work s2">
                        <h4>teamwork - go!gyobok site</h4>
                        <p className="ko">
                            php를 이용하여 게시판, 회원가입, 로그인 등 기본적인 기능을 구현하여 제작한 고등학교 교복 소개 사이트 입니다.
                            <em>Headcount : 4 members / Timeline : 3 weeks</em>
                        </p>
                        <div className="work_btn">
                            <Link to="http://dbwls8751.dothome.co.kr/blog_php/main/main.php" target="_blank"
                                className="ko">view</Link>
                            <Link to="https://github.com/uUZINN/gogyobok-blogSite" target="_blank" className="ko">code</Link>
                        </div>
                        <img src={port02} alt="" />
                    </div>
                    <div className="work s3">
                        <h4>vue - movideo</h4>
                        <p className="ko">vue와 tmdb의 api를 활용하여 최신 영화 정보를 제공하는 사이트를 제작하였습니다.</p>
                        <div className="work_btn">
                            <Link to="https://vue-movie-project2024.netlify.app/" target="_blank" className="ko">view</Link>
                            <Link to="https://github.com/uUZINN/movie-project" target="_blank" className="ko">code</Link>
                        </div>
                        <img src={port03} alt="" />
                    </div>
                    <div className="work s4">
                        <h4>react - fashion youtube</h4>
                        <p className="ko">리액트를 이용하여 패션관련 유튜브 영상만 모아볼 수 있는 사이트를 제작하였습니다.</p>
                        <div className="work_btn">
                            <Link to="https://youtube-project2023.netlify.app/" target="_blank" className="ko">view</Link>
                            <Link to="https://github.com/uUZINN/youtube-project" target="_blank" className="ko">code</Link>
                        </div>
                        <img src={port04} alt="" />
                    </div>
                    <div className="work s5">
                        <h4>teamwork - Dating Simulation</h4>
                        <p className="ko">
                            자바스크립트를 이용하여 웹툰을 소재로 연애 시뮬레이션 게임을 제작하였습니다.
                            <em>Headcount : 3 members / Timeline : 2 weeks</em>
                        </p>
                        <div className="work_btn">
                            <Link to="https://uuzinn.github.io/dating-quizSite/" target="_blank" className="ko">view</Link>
                            <Link to="https://github.com/uUZINN/dating-quizSite" target="_blank" className="ko">code</Link>
                        </div>
                        <img src={port05} alt="" />
                    </div>
                </div>
            </div>
            {/* <!-- // main_work --> */}

            <div className="main_bike parallax__item__desc">
                <div className="bike_text ko">
                    <p className='split'>
                        <em>FIRST. </em>
                        퍼블리셔로 시작한 경험은 지금의 개발자로서 제 강점이 되었습니다.<br />
                        디자인의 의도를 이해하고, 그것을 섬세하게 구현해내는 과정에 익숙합니다.
                    </p>
                    <p className='split'>
                        <em>SECOND. </em>
                        HTML과 CSS로 시작해 JavaScript, Liquid, GraphQL까지<br />
                        경험을 넓혀가며, 표현과 로직을 모두 이해하는 개발자로 성장하고 있습니다.
                    </p>
                </div>
                <div className="bike_cont">
                    <h3 className='split'>
                        CREATING MEMORABLE
                        SITES WITH YOU
                    </h3>
                    <img className="parallax__item__bike" src={draw02} alt="" />
                    <h3 className='split'>& TAILORED WEBSITES.</h3>
                    <p className='split'>ALWAYS BESPOKE. NEVER OFF-THE-SHELF.</p>
                </div>
            </div>
            {/* <!-- // main_bike --> */}

            <div className="main_mobile">
                <div className="mobile_ani">
                    <div className="mobile01">
                        <img className="i1" src={mobile02} alt="" />
                    </div>
                    <div className="macbook">
                        <img className="i2" src={macbook} alt="" />
                    </div>
                    <div className="mobile02">
                        <img className="i3" src={mobile01} alt="" />
                    </div>
                </div>

            </div>
            {/* <!-- // main_mobile --> */}

        </section>
    )
}

export default MainSection01