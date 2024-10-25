import React from 'react';
import '../scss/Header.scss'

const Header = () => {
    return (
        <header id="headerContainer">
            <div id="start">
                <img src="/img/menu.png" alt="이미지 깨짐" className="menuBtn"/>
                <div className="logoBox">
                    <h1 className="logoTitle">
                        <img src="/img/logo.png" className="logo" alt="로고없음"/>
                        흠냐</h1></div>
            </div>
            <div id="center">
                <div className="searchBox">
                    <div className="searchEmpty">
                        <img src="/img/search.png" alt="이미지 깨짐" className="searchIconFront"/>

                    </div>
                    <form action="" className="inputForm">
                        <div className="inputBox">
                            <input type="text" className="searchInput" placeholder="검색"/>
                        </div>
                    </form>
                    <g className="searchBtn">
                        <img src="/img/search.png" alt="이미지 깨짐" className="searchIconBack"/>
                    </g>
                </div>

            </div>
            <div id="end">
                <div className="writeBox">
                    <img className="writeIcon profileIcon" src="/img/write.png" alt="이미지 깨짐"/>

                </div>
                <div className="ProfileBox">
                    <img className="profileImg profileIcon" src="/img/profileEx.png" alt="프로필 깨짐"/>
                </div>
            </div>
        </header>
    );
};

export default Header;