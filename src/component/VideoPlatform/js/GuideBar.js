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
            <div className="yearContainer GuidBarContainer">
                <div className="year ContainerContent">
                    <p>2016년</p>
                </div>                <div className="year ContainerContent">
                    <p>2016년</p>
                </div>                <div className="year ContainerContent">
                    <p>2016년</p>
                </div>                <div className="year ContainerContent">
                    <p>2016년</p>
                </div>                <div className="year ContainerContent">
                    <p>2016년</p>
                </div>                <div className="year ContainerContent">
                    <p>2016년</p>
                </div>                <div className="year ContainerContent">
                    <p>2016년</p>
                </div>                <div className="year ContainerContent">
                    <p>2016년</p>
                </div>                <div className="year ContainerContent">
                    <p>2016년</p>
                </div>
            </div>
            <div className="monthContainer GuidBarContainer">
                <div className="monthBar ContainerContent">
                    <p>8월</p>
                </div>                <div className="monthBar ContainerContent">
                    <p>8월</p>
                </div>                <div className="monthBar ContainerContent">
                    <p>8월</p>
                </div>                <div className="monthBar ContainerContent">
                    <p>8월</p>
                </div>                <div className="monthBar ContainerContent">
                    <p>8월</p>
                </div>                <div className="monthBar ContainerContent">
                    <p>8월</p>
                </div>                <div className="monthBar ContainerContent">
                    <p>8월</p>
                </div>                <div className="monthBar ContainerContent">
                    <p>8월</p>
                </div>                <div className="monthBar ContainerContent">
                    <p>8월</p>
                </div>                <div className="monthBar ContainerContent">
                    <p>8월</p>
                </div>                <div className="monthBar ContainerContent">
                    <p>8월</p>
                </div>                <div className="monthBar ContainerContent">
                    <p>8월</p>
                </div>
            </div>
            <div className="settingContainer GuidBarContainer">
                <div className="setting ContainerContent">
                    <p>설정</p>
                </div>
            </div>
        </div>
    );
};

export default GuideBar;