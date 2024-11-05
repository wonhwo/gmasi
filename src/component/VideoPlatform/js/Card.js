import React from 'react';
import ReactPlayer from "react-player";

const Card = () => {
    return (
        <div className="videoCard">
            <div className="video">
                <ReactPlayer
                    url={"http://localhost:3000/img/209424_small.mp4"}
                    playing={false}
                    controls={false}
                    width="100%"
                    height="100%" // 플레이어 높이
                    className="react-player" // CSS 스타일링을 위한 클래스
                />
            </div>
            <div className="infoCard">
                <div className="videoProfile">
                    <div className="videoProfileBox">
                        <img className="miniProfile" src="/img/profileEx.png" alt=""/>

                    </div>
                </div>
                <div className="videoText">
                    <h2 className="videoTitle">제목제목제목제목제목제목제목제목제목제목제목</h2>
                    <h3 className="riterName">작성자 이름</h3>
                    <div className="detailInfo">
                        <h4 className="viewCount">조회수 0 ●</h4>
                        <h5 className="time">1시간 전</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;