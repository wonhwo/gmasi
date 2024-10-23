import '../scss/Main.scss'
import {useRef, useState} from "react";

const Main = () => {
    const data = [
        {id: 'data1', year: 2016},
        {id: 'data2', year: 2017},
        {id: 'data3', year: 2018},
        {id: 'data4', year: 2019},
        {id: 'data5', year: 2020},
        {id: 'data6', year: 2021},
        {id: 'data7', year: 2022},
        {id: 'data8', year: 2023},
        {id: 'data9', year: 2024},
        {id: 'data10', year: 2025},
        {id: 'data11', year: 2026},
    ];

    const [isMoveTimeLine, setIsMoveTimeLine] = useState(false);
    const [isIconHover, seIsIconHover] = useState("");
    const iconMouseHoverEventHandler = (e) => {
        getPositonHandler(e);
        let temp = e.target.classList[1];
        seIsIconHover(temp);
    }
    const iconMouseExitEventHandler = () => {
        seIsIconHover("")
    }
    const getPositonHandler = (e) => {

        const clickedElement = e.currentTarget;
        // 클릭한 요소의 위치 계산
        const elementRect = clickedElement.getBoundingClientRect();
        const elementCenterY = elementRect.top + window.scrollY + (elementRect.height / 2);
        const elementCenterX = elementRect.left + window.scrollX + (elementRect.width / 2);

        const windowCenterY = window.innerHeight / 2;
        const windowCenterX = window.innerWidth / 2;

        // 스크롤할 위치 계산 (현재 스크롤 위치와 요소 중앙 위치의 차이)
        const scrollToY = elementCenterY - windowCenterY;
        const scrollToX = elementCenterX - windowCenterX;

        // 스크롤 이동
        window.scrollTo({
            top: scrollToY,
            left: scrollToX,
            behavior: 'smooth' // 부드러운 스크롤 효과
        });
    }

    const clickEventHandler = () => {
        const dataElements = document.querySelectorAll('.timeLineBottom');

        setIsMoveTimeLine(false);
        dataElements.forEach((element) => {
            element.classList.add('removeCircle');
        });
        setIsMoveTimeLine(true);



    }
    const downTimeLineHandler = () => {
        const dataElements = document.querySelectorAll('.timeLineBottom');

        setIsMoveTimeLine(false);
        dataElements.forEach((element) => {
            element.classList.remove('removeCircle');
        });

    }

    return (
        <>
            <section id="timeLineContainer">
                <div className={`timeLine timeLineTop ${isMoveTimeLine ? "timeLineBottomAnimate" : ""}`} onClick={downTimeLineHandler}>
                </div>
                <hr/>
                <div className="timeLine timeLineBottom">
                    {data.map((item) => (
                        <div className={`data ${item.id}`}>
                            <img
                                src='/img/circle.png'
                                className={`circleIcon ${item.id}`}
                                onMouseEnter={iconMouseHoverEventHandler}
                                onMouseLeave={iconMouseExitEventHandler}
                                onClick={clickEventHandler}
                                alt="이미지 깨짐"
                            />
                            <img
                                src="/img/mouseClick.gif"
                                className={`hideClick ${item.id} ${isIconHover === item.id ? 'removeClick' : ''}`}
                                alt="이미지 깨짐"
                            />
                            <p className="year">{item.year}</p>
                        </div>
                    ))}

                </div>

            </section>

        </>
    );
};

export default Main;