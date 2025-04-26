import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import circle01 from '../../assets/img/circle01.png';
import circle02 from '../../assets/img/circle02.png';
import circle03 from '../../assets/img/circle03.png';
import circle04 from '../../assets/img/circle04.png';
import circle05 from '../../assets/img/circle05.png';
import circle06 from '../../assets/img/circle06.png';

import blueCircle01 from '../../assets/img/blue_circle01.png';
import blueCircle02 from '../../assets/img/blue_circle02.png';
import blueCircle03 from '../../assets/img/blue_circle03.png';
import blueCircle04 from '../../assets/img/blue_circle04.png';
import blueCircle05 from '../../assets/img/blue_circle05.png';
import blueCircle06 from '../../assets/img/blue_circle06.png';

import work01 from '../../assets/img/work01.png';
import work02 from '../../assets/img/work02.png';
import work03 from '../../assets/img/work03.png';
import work04 from '../../assets/img/work04.png';
import work05 from '../../assets/img/work05.png';
import work06 from '../../assets/img/work06.png';

import { circle } from '../../assets/js/circle';
import imagesLoaded from 'imagesloaded';


const MainSection03 = () => {

    useEffect(() => {
        const target = document.getElementById('mainSection3')

        imagesLoaded(target, { background: true }, () => {
            circle()
        })
    }, [])

    return (
        <section id="mainSection3" className="cont_container mainSection_03">
            <div className="main_text02">
                <h3 className='split'>
                    <span>A frontend developer el-</span>
                    <span>evating user experiences</span>
                    <span>through tech and design</span>
                </h3>

                <p className="ko">
                    A passionate frontend developer dedicated to enhancing<br />
                    user experiences through innovative technology and design.
                </p>
            </div>
            <div className="main_record">

                <div className="circle_wrap">
                    <div className="circle_cont">
                        <div className="circle">
                            <div className="parallax__item__img c1">
                                <img src={circle01} alt="" aria-hidden="true" />
                            </div>
                            <div className="parallax__item__img c2">
                                <img src={circle02} alt="" aria-hidden="true" />
                            </div>
                            <div className="parallax__item__img c3">
                                <img src={circle03} alt="" aria-hidden="true" />
                            </div>
                            <div className="parallax__item__img c4">
                                <img src={circle04} alt="" aria-hidden="true" />
                            </div>
                            <div className="parallax__item__img c5">
                                <img src={circle05} alt="" aria-hidden="true" />
                            </div>
                            <div className="parallax__item__img c6">
                                <img src={circle06} alt="" aria-hidden="true" />
                            </div>
                        </div>
                    </div>

                    <div className="circle_cont">
                        <div className="blue_circle">
                            <div className="parallax__item__img c1">
                                <img src={blueCircle01} alt="" aria-hidden="true" />
                            </div>
                            <div className="parallax__item__img c2">
                                <img src={blueCircle02} alt="" aria-hidden="true" />
                            </div>
                            <div className="parallax__item__img c3">
                                <img src={blueCircle03} alt="" aria-hidden="true" />
                            </div>
                            <div className="parallax__item__img c4">
                                <img src={blueCircle04} alt="" aria-hidden="true" />
                            </div>
                            <div className="parallax__item__img c5">
                                <img src={blueCircle05} alt="" aria-hidden="true" />
                            </div>
                            <div className="parallax__item__img c6">
                                <img src={blueCircle06} alt="" aria-hidden="true" />
                            </div>
                        </div>
                    </div>

                </div>


                <div className="work">
                    <div className="work_title w1">
                        <h5>SOLUGATE - SHIPGATE</h5>
                        <p className="ko">
                            사내 물류팀 전용 홈페이지의 초기 구축을 맡아 하드코딩으로 전 페이지를 제작했으며,
                            라이브러리를 활용해 다양한 애니메이션을 구현하였습니다.
                        </p>
                        <Link to="https://shipgate.io/" target="_blank"><img
                            src={work01} alt="" aria-hidden="true" /></Link>
                        <h5>Technology stack</h5>
                        <ul className="ko">
                            <li>AOS&nbsp;&nbsp;GITLAB</li>
                            <li>HTML&nbsp;&nbsp;CSS&nbsp;&nbsp;JAVASCRIPT</li>
                        </ul>
                    </div>
                    <div className="work_title w2">
                        <h5>CAFE24 - BLITZWAY SHOP</h5>
                        <p className="ko">
                            카페24 기반 쇼핑몰 템플릿을 커스터마이징하여 제작한 프로젝트이며,
                            기본 테마를 바탕으로 컬렉션, 네비게이션, 헤더 등 전체 UI를 새롭게 리빌드하였습니다.
                        </p>
                        <Link to="https://blitzwayshop.cafe24.com/" target="_blank"><img
                            src={work02} alt="" aria-hidden="true" /></Link>
                        <h5>Technology stack</h5>
                        <ul className="ko">
                            <li>CAFE24 커스터마이징 (테마 구조 및 UI 리빌드)</li>
                            <li>HTML&nbsp;&nbsp;CSS&nbsp;&nbsp;JAVASCRIPT</li>
                            <li>현재 운영되지 않는 사이트로, 일부 링크 및 기능은 제한될 수 있습니다.</li>
                        </ul>
                    </div>
                    <div className="work_title w3">
                        <h5>SHOPIFY - LEWKIN APP</h5>
                        <p className="ko">
                            Shopify 앱인 Tapcart를 기반으로 구축된 스토어 모바일 앱을 유지보수하며,
                            상품 및 컬렉션 데이터 커스터마이징과 기능 개선을 수행했습니다.
                        </p>
                        <Link to="https://play.google.com/store/apps/details?id=co.tapcart.app.id_rpBh8vyCX5&hl=ko" target="_blank"><img
                            src={work04} alt="" aria-hidden="true" /></Link>
                        <h5>Technology stack</h5>
                        <ul className="ko">
                            <li>Shopify (Storefront API, Admin API)&nbsp;&nbsp;Tapcart (모바일 앱 제작)&nbsp;&nbsp;</li>
                            <li>HTML&nbsp;&nbsp;CSS&nbsp;&nbsp;JAVASCRIPT&nbsp;&nbsp;GraphQL</li>
                        </ul>
                    </div>
                    <div className="work_title w4">
                        <h5>CAFE24 - BOUTIJOUR</h5>
                        <p className="ko">
                            카페24 기반 사이트의 유지보수 업무를 맡아,
                            이벤트 게시글 및 배너 관리, 페이지 UI 수정 작업을 진행했습니다.
                        </p>
                        <Link to="https://boutijour.kr/" target="_blank"><img
                            src={work06} alt="" aria-hidden="true" /></Link>
                        <h5>Technology stack</h5>
                        <ul className="ko">
                            <li>카페24 기반 사이트 유지보수</li>
                            <li>HTML&nbsp;&nbsp;CSS&nbsp;&nbsp;JAVASCRIPT</li>
                        </ul>
                    </div>
                    <div className="work_title w5">
                        <h5>SOLUGATE - SOLUNOTE</h5>
                        <p className="ko">
                            B2B 커머스 자체 개발 솔루션의 전체 페이지 퍼블리싱을 신규 구축하고,
                            사이트 구조 설계를 담당했습니다.
                        </p>
                        <Link to="http://solugate.com/solutions/solutions_solunote"
                            target="_blank"><img src={work03} alt="" aria-hidden="true" /></Link>
                        <h5>Technology stack</h5>
                        <ul className="ko">
                            <li>탭, 모달, 페이지 전환 등 인터랙션 전반 구현</li>
                            <li>HTML&nbsp;&nbsp;CSS&nbsp;&nbsp;JAVASCRIPT&nbsp;&nbsp;JQUERY</li>
                            <li>기업용 서비스이며, 관련 소개 페이지로 이동됩니다.</li>
                        </ul>
                    </div>
                    <div className="work_title w6">
                        <h5>REACT - PORTFOLIO</h5>
                        <p className="ko">
                            디자인부터 퍼블리싱, React 기반 프론트엔드 개발 및 Express 서버 구축까지 전체 작업을 직접 수행했습니다.
                        </p>
                        <Link to="https://www.eu-zin.co.kr/" target="_blank"><img
                            src={work05} alt="" aria-hidden="true" /></Link>
                        <h5>Technology stack</h5>
                        <ul className="ko">
                            <li>Design&nbsp;&nbsp;:&nbsp;&nbsp;Figma</li>
                            <li>Frontend&nbsp;&nbsp;:&nbsp;&nbsp;React, HTML, CSS, JavaScript</li>
                            <li>Backend&nbsp;&nbsp;:&nbsp;&nbsp;Express, Node.js</li>
                            <li>Deployment&nbsp;&nbsp;:&nbsp;&nbsp;Render</li>
                            <li>Version Control&nbsp;&nbsp;:&nbsp;&nbsp;Git, GitHub</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default MainSection03