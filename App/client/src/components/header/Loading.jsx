import React, { useEffect, useState } from 'react'
// import LoadGridItem from '../../assets/img/loading-min.jpg';
// import gsap from 'gsap';
import "../../assets/css/section/loading.css";



const Loading = () => {

    const [c, setC] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (c < 100) {
                setC(prevC => prevC + 1);
            } else {
                clearInterval(intervalId);
                // 2초 뒤에 화면이 서서히 사라지도록 설정
                setTimeout(() => {
                    setFadeOut(true);
                    document.body.style.overflow = '';
                }, 2500);
            }
        }, 20);

        return () => {
            clearInterval(intervalId);
        };
    }, [c]);

    // 화면이 서서히 사라지는 클래스를 추가
    const loaderClasses = `loader loading-page ${fadeOut ? 'fade-out' : ''}`;


    return (
        <div className={loaderClasses} id='loader'>
            <div className="loader-logo-wrap">
                <h1 className="main_logo">
                    <svg viewBox="0 0 1900 250">
                        <text x="50%" y="50%" text-anchor="middle" dy="50px">loading</text>
                    </svg>
                </h1>
                <div class="counter">
                    <h1>{c}%</h1>
                    <hr style={{ width: `${c}%`, marginLeft: '0%' }} />
                </div>
            </div>
            {/* <div className="load_grid">
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

            </div> */}

        </div>
    )
}

export default Loading