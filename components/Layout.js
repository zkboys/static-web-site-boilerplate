import React from 'react';
import Head from 'next/head'
import Header from './header/Header';

const Layout = (props) => (
    <div>
        <Head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            {/*<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->*/}
            <meta name="keywords" content="星岚酒店PMS, starPMS, 北京星岚科技, 星宿PMS, 酒店管理, 管理软件"/>
            <meta name="description" content="星宿PMS,做你的酒店管理好帮手，北京星岚科技有限公司是一家旅游酒店行业综合管理服务提供商"/>
            <meta name="author" content=""/>
            <link rel="icon" href="/static/image/favicon.png"/>

            <title>ZK-BOYS</title>

            {/*<!-- Bootstrap core CSS -->*/}
            <link href="/static/bootstrap-3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
            {/*<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->*/}
            <link href="/static/bootstrap-3.3.7/css/ie10-viewport-bug-workaround.css" rel="stylesheet"/>

            {/*<!-- Swiper core CSS -->*/}
            <link rel="stylesheet" href="/static/swiper-3.4.2/css/swiper.min.css"/>

            {/*<!-- Just for debugging purposes. Don't actually copy these 2 lines! -->*/}
            {/*<!--[if lt IE 9]>*/}
            <script src="/static/bootstrap-3.3.7/js/ie8-responsive-file-warning.js"/>
            {/*<![endif]-->*/}
            <script src="/static/bootstrap-3.3.7/js/ie-emulation-modes-warning.js"/>
            {/*<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->*/}
            {/*<!--[if lt IE 9]>*/}
            <script src="/static/bootstrap-3.3.7/js/html5shiv.min.js"/>
            <script src="/static/bootstrap-3.3.7/js/respond.min.js"/>
            {/*<![endif]-->*/}

            {/*<!-- Bootstrap core JavaScript*/}
            {/*================================================== -->*/}
            {/*<!-- Placed at the end of the document so the pages load faster -->*/}
            <script src="/static/bootstrap-3.3.7/js/jquery.min.js"/>
            <script src="/static/bootstrap-3.3.7/js/bootstrap.min.js"/>
            {/*<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->*/}
            <script src="/static/bootstrap-3.3.7/js/ie10-viewport-bug-workaround.js"/>
            <script src="/static/swiper-3.4.2/js/swiper.min.js"/>
        </Head>
        <Header activeNav={props.activeNav}/>
        {props.children}
    </div>
);

export default Layout;
