import "../scss/VideoPlatform.scss"
import {useEffect, useState} from "react";
import ReactPlayer from "react-player";
import GuideBar from "./GuideBar";
import Card from "./Card";

const VideoPlatform = ({isOneClickKnow}) => {

    useEffect(() => {
        const $videoPlatForm = document.getElementById("videoPlatForm");
        if (isOneClickKnow === 0 || isOneClickKnow === 1) {
            $videoPlatForm.style.display = 'none';
        } else {
            $videoPlatForm.style.display = 'flex';
        }
    }, [isOneClickKnow]);
    return (
        <section id="videoPlatForm">
            <GuideBar/>
            <div className="box">
                <div className="monthInfo">
                    <h1 className="month">1월</h1>
                    <div className="videoBox">
                        <div className="card">
                            <Card/>
                        </div>
                        <div className="card">
                            <Card/>
                        </div>
                        <div className="card">
                            <Card/>
                        </div>
                        <div className="card">
                            <Card/>
                        </div>
                        <div className="card">
                            <Card/>
                        </div>
                    </div>
                </div>
                <div className="monthInfo">
                    <h1 className="month">2월</h1>
                    <div className="videoBox">
                        <div className="card">
                            <Card/>
                        </div>
                    </div>
                </div>                <div className="monthInfo">
                    <h1 className="month">2월</h1>
                    <div className="videoBox">
                        <div className="card">
                            <Card/>
                        </div>
                    </div>
                </div>                <div className="monthInfo">
                    <h1 className="month">2월</h1>
                    <div className="videoBox">
                        <div className="card">
                            <Card/>
                        </div>
                    </div>
                </div>                <div className="monthInfo">
                    <h1 className="month">2월</h1>
                    <div className="videoBox">
                        <div className="card">
                            <Card/>
                        </div>
                    </div>
                </div>                <div className="monthInfo">
                    <h1 className="month">2월</h1>
                    <div className="videoBox">
                        <div className="card">
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default VideoPlatform;