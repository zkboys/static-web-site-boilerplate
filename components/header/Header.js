import React from 'react';
import Link from 'next/link';
import style from './style';

const Header = (props) => {
    const {activeNav} = props;
    const navs = [
        {path: '/', text: '首页'},
        {path: '/news', text: '新闻'},
        {path: '/about', text: '关于'},
        {path: '/production', text: '产品'},
    ];
    return (
        <div>
            <style jsx>{style}</style>

            <nav className="main-nav navbar navbar-fixed-top">
                <div className="main-nav-container">
                    <Link href="/">
                        <a className="head-logo">
                            <img src="/static/image/favicon.png" alt="ZK-BOYS"/>
                            <div>— ZK-BOYS —</div>
                        </a>
                    </Link>
                    <ul className="nav-list">
                        {navs.map(item => {
                            const {path, text} = item;

                            let className = ''; // window.location.pathname === path ? 'active' : '';
                            if (activeNav) {
                                className = activeNav === path ? 'active' : '';
                            }
                            return (
                                <li key={path}><Link href={path}><a className={className}>{text}</a></Link></li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;
