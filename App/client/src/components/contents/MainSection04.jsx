import React from 'react'
import profile from '../../assets/img/profile_blue-min.jpg';
import CommentArea from '../comment/CommentArea';

const MainSection04 = () => {
    return (
        <section id="mainSection" className="mainContact">
            <div className="main_contact">
                <div className="contact_text">
                    <h4>
                        One line of appreciation
                    </h4>
                    <CommentArea />
                </div>
                <div className="contact_profile">
                    <a href='mailto:dbwls9038@naver.com'><img src={profile} alt="" /></a>
                </div>
            </div>
        </section>
    )
}

export default MainSection04