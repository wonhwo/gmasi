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
                        필효해</h1></div>
            </div>
            <div id="center">
                <form action="" className="inputForm">

                </form>
            </div>
            <div id="end">

            </div>
        </header>
    );
};

export default Header;