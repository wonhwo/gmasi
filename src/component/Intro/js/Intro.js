import React, {useEffect, useState} from 'react';
import '../scss/Intro.scss'

const Intro = () => {
    const [scale, setScale] = useState(1);
    const [scrollX, setScrollX] = useState(1);
    const [scrollY, setScrollY] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollX = window.scrollX;
            // 스크롤 위치에 따라 확대 비율 설정
            const scaleValue = 1 + scrollY / 1500; // 1000은 비율에 따라 조정

            setScale(scaleValue);
            setScrollY(scrollY / 2);
        };

        window.addEventListener('scroll', handleScroll);

        // 초기 스크롤 값 처리
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="wrapper">
            <div className="introContent">
                <div className="introHead"></div>
                <div className="introMain">
                    <div className="mask">
                        <div className="imgHead"></div>
                        <div className="imgBody" style={{
                            transform: `translate(-50%, -50%) scale(${scale})`,
                        }}>
                            <div className="loader_illust -active">

                                <div className="loader_sky"
                                     style={{transform:`translate3d(0,${scrollY/80}px,0)`}}>
                                    <img src="/img/sky.png" alt=""/>
                                </div>
                                <div className="loader_horizon"
                                     style={{transform:`translate3d(0,${scrollY/80}px,0)`}}>
                                    <img src="/img/horizon.jpg" alt=""/>
                                </div>
                                <div className="loader_building"
                                     style={{transform:`translate3d(${scrollY/5}px,${scrollY/80}px,0)`}}>
                                    <img src="/img/building.png" alt=""/>
                                </div>
                                <div className="loader_mountainLeft" data-loader-scale-sticky="mountain-left"
                                     style={{transform:`translate3d(-${scrollY/5}px,${scrollY/80}px,0)`}}>
                                    <img src="/img/mountain_left.png" alt=""/>
                                </div>
                                <div className="loader_mountainRight" data-loader-scale-sticky="mountain-right"
                                     style={{transform:`translate3d(${scrollY/5}px,${scrollY/80}px,0)`}}>
                                    <img src="/img/mountain_right.png" alt=""/>
                                </div>
                                <div className="loader_shadow" data-loader-scale-sticky="shadow"
                                     style={{transform:`translate3d(${scrollY/5}px,${scrollY/80}px,0)`}}
                                >
                                    <img src="/img/shadow.png" alt=""/>
                                </div>
                                <div className="loader_child" data-loader-scale-sticky="child"
                                     style={{transform:`translate3d(0,${scrollY/80}px,0) rotate(${scrollY/80}deg)`}}
                                >
                                    <img src="/img/child.png" alt=""/>
                                </div>
                                <div className="loader_woman" data-loader-scale-sticky="woman"
                                     style={{transform:`translate3d(0,${scrollY/80}px,0) rotate(-${scrollY/80}deg)`}}
                                >
                                    <img src="/img/woman.png" alt=""/>
                                </div>
                                <div className="loader_man" data-loader-scale-sticky="man"
                                     style={{transform: `translate3d(0,${scrollY / 7}px,0)`}}
                                >
                                    <img src="/img/man.png" alt=""/>
                                </div>
                                <div className="loader_wood" data-loader-scale-sticky="wood" style={{
                                    transform: `scale(${scale})`,
                                }}>
                                    <img src="/img/wood.png" alt=""/>
                                </div>
                                <div className="loader_woodLeft"
                                     data-loader-scale-sticky="wood-left"
                                     style={{transform: `scale(${scale}) translate3d(-${scrollY / 2}px,-${scrollY / 3}px,0)`}}
                                >
                                    <img src="/img/wood_left.png" alt=""/>
                                </div>
                                <div className="loader_woodRight" data-loader-scale-sticky="wood-right"
                                     style={{transform: `scale(${scale}) translate3d(${scrollY / 2}px,-${scrollY / 3}px,0)`}}
                                >
                                    <img src="/img/wood_right.png" alt=""/>
                                </div>
                                <div className="loader_bird" data-loader-scale-sticky="bird"
                                     style={{transform:`translate3d(0,${scrollY/20}px,0) rotate(${scrollY/80}deg)`}}
                                >
                                    <img src="/img/bird.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="introFooter"></div>
            </div>
        </div>
    );
};

export default Intro;