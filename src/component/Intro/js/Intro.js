import React, {useEffect, useState} from 'react';
import '../scss/Intro.scss'
// https://northobject.com/
const Intro = () => {
    const [scale, setScale] = useState(1);
    const [scrollY, setScrollY] = useState(1);
    const [isMouseHover, setIsMouseHover] = useState(false);
    const [progress, setProgress] = useState(0); // 애니메이션 진행도
    const [isScaled, setIsScaled] = useState(false);

    useEffect(() => {
        setIsScaled(true);
        let currentScrollY = 0;
        let targetScrollY = 0;
        let velocity = 0;
        const handleSmoothScroll = () => {
            // 목표 위치와 현재 위치의 차이를 사용해 속도를 계산
            velocity += (targetScrollY - currentScrollY) * 0.1; // 가속 비율 조정
            currentScrollY += velocity; // 속도를 적용해 현재 위치 업데이트
            velocity *= 0.1; // 감속률 적용 (0.9는 감속률, 높을수록 관성이 오래 유지됨)

            const scaleValue = 1 + currentScrollY / 1500;

            setScale(scaleValue);
            setScrollY(currentScrollY);

            requestAnimationFrame(handleSmoothScroll);
        };

        const onScroll = () => {
            targetScrollY = window.scrollY; // 목표 스크롤 위치 설정
        };

        window.addEventListener("scroll", onScroll);
        handleSmoothScroll();

        return () => {
            window.removeEventListener("scroll", onScroll);
        };


    }, []);
    // Ease-out cubic 함수
    const slowIncrease = (t) => Math.pow(t, 4);  // 3제곱을 사용하여 느리게 증가시킴

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    return 100;
                }
            });
        }, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="wrapper" style={{opacity: `${1 / scale < 0.6 ? 1.8 / scale : 1}`}}>
            <div className="introContent">
                <div className="introMain">
                    <div className="mask">
                        <div className="imgHead" style={{
                            maskImage: progress < 100
                            ? `linear-gradient(to top right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) ${progress}%)`
                            : 'none',
                            opacity: slowIncrease(progress / 100)}}>
                            <svg className="svg" width="100%" height="200" viewBox="0 0 800 200">
                                <defs>
                                    <path
                                        id="curved-path"
                                        d="M 50 150 Q 400 0 750 150"
                                        fill="none"
                                        stroke="transparent"
                                    />
                                </defs>
                                <text
                                    fontSize={`${2.5 / scale}rem`}
                                    fill="#2a3a4b"
                                    fontFamily="'Kosugi Maru', sans-serif"
                                    textAnchor="middle"
                                    letterSpacing="0.1em"
                                >
                                    <textPath href="#curved-path" startOffset="50%">
                                        레삐사이트 만드는중~
                                    </textPath>
                                </text>
                            </svg>

                        </div>
                        <div className="imgBody" style={{
                            maskImage: progress < 100
                                ? `linear-gradient(to top right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0) ${progress}%)`
                                : 'none',
                            opacity: slowIncrease(progress / 100),
                            transform: `translate(-50%, -50%) scale(${scale})`,
                        }}>
                            <div className="loader_illust -active">

                                <div className="loader_sky"
                                     style={{transform: `translate3d(0,${scrollY / 80}px,0)`}}>
                                    <img src="/img/sky.png" alt=""/>
                                </div>
                                <div className="loader_horizon"
                                     style={{transform: `translate3d(0,${scrollY / 80}px,0)`}}>
                                    <img src="/img/horizon.jpg" alt=""/>
                                </div>
                                <div className="loader_building"
                                     style={{transform: `translate3d(${scrollY / 5}px,${scrollY / 80}px,0)`}}>
                                    <img src="/img/building.png" alt=""/>
                                </div>
                                <div className="loader_mountainLeft" data-loader-scale-sticky="mountain-left"
                                     style={{transform: `translate3d(-${scrollY / 5}px,${scrollY / 80}px,0)`}}>
                                    <img src="/img/mountain_left.png" alt=""/>
                                </div>
                                <div className="loader_mountainRight" data-loader-scale-sticky="mountain-right"
                                     style={{transform: `translate3d(${scrollY / 5}px,${scrollY / 80}px,0)`}}>
                                    <img src="/img/mountain_right.png" alt=""/>
                                </div>
                                <div className="loader_shadow" data-loader-scale-sticky="shadow"
                                     style={{transform: `translate3d(${scrollY / 5}px,${scrollY / 80}px,0)`}}
                                >
                                    <img src="/img/shadow.png" alt=""/>
                                </div>
                                <div className="loader_child" data-loader-scale-sticky="child"
                                     style={{transform: `translate3d(0,${scrollY / 80}px,0) rotate(${scrollY / 80}deg)`}}
                                >
                                    <img src="/img/child.png" alt=""/>
                                </div>
                                <div className="loader_woman" data-loader-scale-sticky="woman"
                                     style={{transform: `translate3d(0,${scrollY / 80}px,0) rotate(-${scrollY / 80}deg)`}}
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
                                     style={{transform: `translate3d(0,${scrollY / 20}px,0) rotate(${scrollY / 80}deg)`}}
                                >
                                    <img src="/img/bird.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="introFooter" style={{
                    transform: `translate(-50%, -50%) translate3d(0,${scrollY / 20}px,0) scale(${!isMouseHover ? 1 / scale : 0.8||isScaled})`,
                }} onMouseEnter={(e) => {
                    setIsMouseHover(true);
                }} onMouseLeave={() => {
                    setIsMouseHover(false);
                }}>
                    <ul className="menu align-center expanded text-center SMN_effect-31">
                        <li>
                            <div className="textt" data-hover="Scroll Down"><span>Scroll Down</span></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Intro;