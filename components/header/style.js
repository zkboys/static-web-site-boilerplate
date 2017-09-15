/* language=CSS */
export default `
.main-nav {
    background: url("/static/image/black-bg-50.png") repeat;
}

.main-nav > div.main-nav-container {
    width: 1000px;
    margin: 0 auto;
    height: 100px;
}

.head-logo,
.head-logo:link,
.head-logo:visited,
.head-logo:hover,
.head-logo:active {
    float: left;
    width: 110px;
    color: #fff;
    text-align: center;
    font-weight: 100;
    text-decoration: none;
}

.head-logo > img {
    margin: 10px 0;
    width: 50px;
}

.nav-list {
    margin-top: 42px;
    float: right;
}

.nav-list > li {
    display: inline-block;
}

.nav-list > li > a {
    margin: 0 10px;
    padding-bottom: 10px;
}

.nav-list > li > a,
.nav-list > li > a:link,
.nav-list > li > a:visited,
.nav-list > li > a:hover,
.nav-list > li > a:active {
    color: #fff;
    text-decoration: none;
}

.nav-list > li > a.active {
    border-bottom: 1px solid #fff;
}

`