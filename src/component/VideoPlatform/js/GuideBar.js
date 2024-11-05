import React from 'react';
import "../scss/GuideBar.scss"

const GuideBar = () => {
    return (
        <div className="guideBar ">
            <div className="homeContainer GuidBarContainer">
                <div className="home ContainerContent">
                    <img className="homeIcon" src="/img/homeBtn.png" alt=""/>
                    <p className="homeText">홈</p>
                </div>
            </div>
            <div className="monthContainer GuidBarContainer">

                <div className="monthContent ContainerContent">
                    <img className="monthIcon" src="/img/make.png" alt=""/>
                    <p className="monthText">동영상 만들기</p>
                </div>
                <div className="monthContent ContainerContent">
                    <img className="monthIcon" src="/img/video.png" alt=""/>
                    <p className="monthText">내 동영상</p>
                </div>
                <div className="monthContent ContainerContent">
                    <img className="monthIcon" src="/img/watch.png" alt=""/>
                    <p className="monthText">최근 기록</p>
                </div>
            </div>

            <div className="yearContainer GuidBarContainer">
                <p className="yearTitle">2019년</p>
                <table border="1" className="monthTable">
                    <tr>
                        <td>1월</td>
                        <td>2월</td>
                        <td>3월</td>
                    </tr>
                    <tr>
                        <td>4월</td>
                        <td>5월</td>
                        <td>6월</td>
                    </tr>
                    <tr>
                        <td>7월</td>
                        <td>8월</td>
                        <td>9월</td>
                    </tr>
                    <tr>
                        <td>10월</td>
                        <td>11월</td>
                        <td>12월</td>
                    </tr>

                </table>
            </div>
            <div className="settingContainer GuidBarContainer">
                <div className="setting ContainerContent">
                    <img className="settingImg" src="/img/setting.png" alt=""/>
                    <p className="settingText">설정</p>
                </div>
            </div>
        </div>
    );
};

export default GuideBar;