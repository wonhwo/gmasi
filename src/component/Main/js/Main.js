import '../scss/Main.scss'
import {useEffect, useRef, useState} from "react";
import {ReactTyped} from 'react-typed';
import VideoPlatform from "../../VideoPlatform/js/VideoPlatform";


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
    const childRef = useRef(null);

    const [whatISYear, setWhatISYear] = useState("");
    const [isTitleCheck, setIsTitleCheck] = useState(false);
    const [isMoveTimeLine, setIsMoveTimeLine] = useState(false);
    const [isIconHover, seIsIconHover] = useState("");
    const [isOneClickKnow, setIsOneClickKnow] = useState(0);
    const iconMouseHoverEventHandler = (e) => {
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
        const $titleBox = document.querySelector(".titleBox");
        const centerX = (window.innerWidth - elementRect.width) / 2;
        childRef.current.style.left= `${centerX}px`;

        $titleBox.style.left = `${elementRect.left + window.scrollX}px`;
        const elementCenterY = elementRect.top + window.scrollY + (elementRect.height / 2);
        const elementCenterX = elementRect.left + window.scrollX + (elementRect.width / 2);

        const windowCenterY = window.innerHeight / 2;
        const windowCenterX = window.innerWidth / 2;

        // 스크롤할 위치 계산 (현재 스크롤 위치와 요소 중앙 위치의 차이)
        const scrollToY = elementCenterY - windowCenterY;
        const scrollToX = elementCenterX - windowCenterX;
        $titleBox.style.transform = "translate(-9%, -9%)"; // 왼쪽 위로 이동

        // 스크롤 이동
        window.scrollTo({
            top: scrollToY,
            left: scrollToX,
            behavior: 'smooth' // 부드러운 스크롤 효과
        });
    }

    const clickEventHandler = (e) => {
        e.stopPropagation();
        if(isOneClickKnow===0){
                setIsOneClickKnow(1);
                console.log("1클릭");
            getPositonHandler(e);

        }
        if(isOneClickKnow===1){
            if(isIconHover===e.target.classList[1]){
                setIsOneClickKnow(2);
                console.log("2클릭");
                timeLineHandler(e);

            }else{
                getPositonHandler(e);
                setIsOneClickKnow(0);
            }
        }
        if(isOneClickKnow===2){
            setIsOneClickKnow(0);
            console.log("초기화")

        }
        iconMouseHoverEventHandler(e);
    }

    const timeLineHandler = (e) => {
            const findByYear = Array.from(e.target.parentNode.children).find(child => child.classList.contains('year'));
            setWhatISYear(findByYear.textContent);
            const dataElements = document.querySelectorAll('.timeLineBottom');
            setIsMoveTimeLine(false);
            dataElements.forEach((element) => {
                element.classList.add('removeCircle');
            });
            setIsMoveTimeLine(true);

            const titleHandler = () => {
                setIsTitleCheck(true);
            }
            setTimeout(titleHandler, 1000);
    }
    const downTimeLineHandler = () => {
        if(isTitleCheck){
        iconMouseExitEventHandler();
        setIsOneClickKnow(0);

        const dataElements = document.querySelectorAll('.timeLineBottom');
        setIsTitleCheck(false);

        setIsMoveTimeLine(false);
        dataElements.forEach((element) => {
            element.classList.remove('removeCircle');
        });
        }
    }

    return (
        <>
            <section id="timeLineContainer">
                <div className={`timeLineBox ${isMoveTimeLine ? "timeLineBoxTop" : "timeLineBoxMid"}`}>
                    <div className="timeLine timeLineTop"
                         onClick={downTimeLineHandler}>
                        <div className="titleBox">
                            {isTitleCheck ? <ReactTyped
                                className="title"
                                strings={[whatISYear + "년 어쩌구 저쩌구 입니당."]}
                                typeSpeed={150}
                            /> : ""}
                        </div>
                    </div>
                    <hr/>
                    <div className="timeLine timeLineBottom">

                        {data.map((item) => (
                            <div className={`data ${item.id}`}>
                                <img
                                    src='/img/circle.png'
                                    className={`circleIcon ${item.id} ${isIconHover === item.id ? 'circleIconSizeUp' : ''}`}
                                    onClick={clickEventHandler}
                                    alt="이미지 깨짐"
                                />
                                <p className="year">{item.year}</p>

                            </div>
                        ))}
                    </div>
                </div>
                <div className="platFormBox">
                    <VideoPlatform ref={childRef}/>
                </div>

            </section>

        </>
    );
};

export default Main;