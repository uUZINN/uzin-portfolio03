import React, { useEffect } from 'react'
import LoadGridItem from '../../assets/img/loading-min.jpg';
import gsap from 'gsap';
import "../../assets/css/section/loading.css";



const Loading = () => {

    useEffect(() => {
        // 페이지 로딩 시 실행될 코드
        const loaderLogo = document.querySelector('.loader-logo-wrap');
        const loadGridItems = document.querySelectorAll('.load_grid-item');

        gsap.to(loaderLogo, {
            duration: 0.7
        });

        gsap.set(loadGridItems, { transformOrigin: '50% 0%' });
        gsap.to(loadGridItems, {
            scaleY: 0,
            delay: 3,
            duration: 1,
            ease: (i) => (i === 1 ? 1 : 1 - Math.pow(2, -10 * i)),
            onComplete: () => {
                const loader = document.querySelector('.loader');
                gsap.to(loader, {
                    opacity: 0,
                    duration: 1,
                    onComplete: () => {
                        loader.style.display = 'none';
                    }
                });
            }
        });

        // 링크 클릭 시 실행될 코드
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                if (
                    link.hostname === window.location.host &&
                    link.href.indexOf('#') === -1 &&
                    link.target !== '_blank'
                ) {
                    e.preventDefault();
                    const destination = link.href;

                    gsap.fromTo(loaderLogo, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        duration: 0.5,
                    });

                    gsap.set(loadGridItems, { transformOrigin: '50% 100%' });
                    const loadGrid = document.querySelector('.load_grid');
                    loadGrid.style.display = 'flex';

                    gsap.fromTo(loadGridItems, {
                        scaleY: 0
                    }, {
                        scaleY: 1,
                        duration: 0.8,
                        ease: (y) => (y === 1 ? 1 : 1 - Math.pow(2, -10 * y)),
                        onComplete: () => {
                            window.location = destination;
                        }
                    });
                }
            });
        });

        // 뒤로가기 버튼 클릭 시 실행될 코드
        window.onpageshow = function (event) {
            if (event.persisted) {
                window.location.reload();
            }
        };
    }, []);


    return (
        <div className='loader'>
            <div className="loader-logo-wrap">
                <h1 className="main_logo">
                    <svg viewBox="0 0 1900 250">
                        <text x="50%" y="50%" text-anchor="middle" dy="50px">loading</text>
                    </svg>
                </h1>
            </div>
            <div className="load_grid">
                <div className="load_grid-item">
                    <img src={LoadGridItem} />
                </div>
                <div className="load_grid-item">
                    <img src={LoadGridItem} />
                </div>
                <div className="load_grid-item">
                    <img src={LoadGridItem} />
                </div>
                <div className="load_grid-item">
                    <img src={LoadGridItem} />
                </div>
                <div className="load_grid-item">
                    <img src={LoadGridItem} />
                </div>
                <div className="load_grid-item">
                    <img src={LoadGridItem} />
                </div>
                <div className="load_grid-item">
                    <img src={LoadGridItem} />
                </div>
                <div className="load_grid-item">
                    <img src={LoadGridItem} />
                </div>

                <div className="load_grid-item">
                    <img src={LoadGridItem} />
                </div>
                <div className="load_grid-item">
                    <img src={LoadGridItem} />
                </div>
                <div className="load_grid-item">
                    <img src={LoadGridItem} />
                </div>
                <div className="load_grid-item">
                    <img src={LoadGridItem} />
                </div>
                <div className="load_grid-item">
                    <img src={LoadGridItem} />
                </div>
                <div className="load_grid-item">
                    <img src={LoadGridItem} />
                </div>
                <div className="load_grid-item">
                    <img src={LoadGridItem} />
                </div>
                <div className="load_grid-item">
                    <img src={LoadGridItem} />
                </div>

                <div className="load_grid-item">
                    <img src={LoadGridItem} />
                </div>
                <div className="load_grid-item">
                    <img src={LoadGridItem} />
                </div>
                <div className="load_grid-item">
                    <img src={LoadGridItem} />
                </div>
                <div className="load_grid-item">
                    <img src={LoadGridItem} />
                </div>
                <div className="load_grid-item">
                    <img src={LoadGridItem} />
                </div>
                <div className="load_grid-item">
                    <img src={LoadGridItem} />
                </div>
                <div className="load_grid-item">
                    <img src={LoadGridItem} />
                </div>
                <div className="load_grid-item">
                    <img src={LoadGridItem} />
                </div>

            </div>
        </div>
    )
}

export default Loading