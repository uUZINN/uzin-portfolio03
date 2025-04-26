import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import draw01 from '../../assets/img/draw01.png';
import draw02 from '../../assets/img/draw02.png';
import port01 from '../../assets/img/port01.png';
import port02 from '../../assets/img/port02.png';
import port03 from '../../assets/img/port03.png';
import port04 from '../../assets/img/port04.png';
import port05 from '../../assets/img/port05.png';
import { work } from '../../assets/js/work';
import { typing } from '../../assets/js/typing';
import imagesLoaded from 'imagesloaded';


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

    useEffect(() => {
        const container = document.getElementById('mainSection')

        imagesLoaded(container, { background: true }, () => {
            work()
            typing()
        })
    }, [])

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
                    <img className="draw_tall parallax__item__desc" src={draw01} alt="" aria-hidden="true" />
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
                        <h4>shopify - lewkin</h4>
                        <div className="work_desc">
                            <div className="work_txt">
                                <p className="ko">
                                    쇼핑몰(EN, AU, UK, EU, CA, HK, JP, SG) 8개국 프론트 리뉴얼 개발<br />
                                    [현재 gl(글로벌) 통합 운영을 위한 개발 및 유지보수 진행 중]
                                    <em>
                                        · TOOL : Shopify Storefront API, GraphQL, JavaScript, Liquid, Figma<br />
                                        · 카트 업데이트 이벤트 감지 후 API 호출을 통한 UI 상태 동기화<br />
                                        · 국가 및 통화 기반 로직 처리 (localization)<br />
                                        · 메타필드 기반 조건부 UI 렌더링<br />
                                        · 프론트엔드 전반 담당 및 유지보수 리드<br />
                                        · 3인 구성 / 기여도 40%
                                    </em>
                                </p>
                                <div className="work_btn">
                                    <Link to="https://lewkin.com/" target="_blank" className="ko">view site</Link>
                                    {/* <Link to="https://github.com/uUZINN/vue-project2023" target="_blank" className="ko">code</Link> */}
                                </div>
                            </div>
                            <img src={port01} alt="" aria-hidden="true" />
                        </div>
                    </div>
                    <div className="work s2">
                        <h4>shopify - coway</h4>
                        <div className="work_desc">
                            <div className="work_txt">
                                <p className="ko">
                                    Coway Water purifier Maintenance service<br />
                                    [GSAP 플러그인을 사용한 반응형 스크롤 트리거 애니메이션 적용]
                                    <em>
                                        · TOOL : Shopify Liquid, Jquery(GSAP), Photoshop<br />
                                        · Web Development & Animation<br />
                                        · 1인 구성 / 기여도 100%
                                    </em>
                                </p>
                                <div className="work_btn">
                                    <Link to="https://coway-maintenance.myshopify.com/" target="_blank"
                                        className="ko">view site</Link>
                                    {/* <Link to="https://github.com/uUZINN/gogyobok-blogSite" target="_blank" className="ko">code</Link> */}
                                </div>
                            </div>
                            <img src={port02} alt="" aria-hidden="true" />
                        </div>
                    </div>
                    <div className="work s3">
                        <h4>shopify - kim’s hardware</h4>
                        <div className="work_desc">
                            <div className="work_txt">
                                <p className="ko">
                                    Global Store<br />
                                    [프론트엔드 구조 개선을 포함한 페이지 개발 및 퍼포먼스 향상 작업]
                                    <em>
                                        · TOOL : Shopify Liquid<br />
                                        · 업무 보조 및 상품 필터 기능 보수 작업<br />
                                        · 2인 구성 / 기여도 30%
                                    </em>
                                </p>
                                <div className="work_btn">
                                    <Link to="https://kimshardware.com/" target="_blank" className="ko">view site</Link>
                                    {/* <Link to="https://github.com/uUZINN/movie-project" target="_blank" className="ko">code</Link> */}
                                </div>
                            </div>
                            <img src={port03} alt="" aria-hidden="true" />
                        </div>
                    </div>
                    <div className="work s4">
                        <h4>shopify - shopigate</h4>
                        <div className="work_desc">
                            <div className="work_txt">
                                <p className="ko">
                                    기업 패밀리 홈페이지 리뉴얼<br />
                                    [테마 기획 및 선정 ~ 전 페이지 구축·개발]
                                    <em>
                                        · TOOL : Shopify Storefront API, GraphQL, JavaScript, Liquid<br />
                                        · GraphQL 쿼리 설계, API 응답 처리 및 캐싱, 동적 렌더링 처리<br />
                                        · 1인 구성 / 기여도 100%
                                    </em>
                                </p>
                                <div className="work_btn">
                                    <Link to="https://shopigate.co.kr/" target="_blank" className="ko">view</Link>
                                    {/* <Link to="https://github.com/uUZINN/youtube-project" target="_blank" className="ko">code</Link> */}
                                </div>
                            </div>
                            <img src={port04} alt="" aria-hidden="true" />
                        </div>
                    </div>
                    {/* <div className="work s5">
                        <h4>hardcoding - solunote</h4>
                        <div className="work_desc">
                            <div className="work_txt">
                                <p className="ko">
                                    B2B 커머스 자체개발 솔루션<br />
                                    [전체 페이지 퍼블리싱 신규 구축 및 구조 설계]
                                    <em>
                                        · TOOL : html, css, javascript, jquery<br />
                                        · 탭, 모달, 페이지 전환 등 인터랙션 전반 구현<br />
                                        · 퍼블리싱 단독 수행<br />
                                        · 1인 구성 / 기여도 100%
                                    </em>
                                </p>
                                <div className="work_btn">
                                    <Link to="http://solugate.com/solutions/solutions_solunote" target="_blank" className="ko">기업용 서비스이며, 관련 소개 페이지로 이동됩니다.</Link>
                                </div>
                            </div>
                            <img src={port05} alt="" aria-hidden="true" />
                        </div>
                    </div> */}
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
                    <img className="parallax__item__bike" src={draw02} alt="" aria-hidden="true" />
                    <h3 className='split'>& TAILORED WEBSITES.</h3>
                    <p className='split'>ALWAYS BESPOKE. NEVER OFF-THE-SHELF.</p>
                </div>
            </div>
            {/* <!-- // main_bike --> */}



        </section>


    )


}

export default MainSection01