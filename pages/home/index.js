import React from 'react';
import Layout from '../../components/Layout.js'
import Banner from '../../components/banner/Banner'


export default class Index extends React.Component {
    componentDidMount() {
        console.log('jQuery is Ok', $('h1'));
        console.log('window is Ok', window);
        $(window).on('resize', this.handleWindowResize);
        $('p').click(() => {
            console.log('click p');
        });
    }

    componentWillUnmount() {
        console.log('组件被卸载，释放当前组件占用的资源');
        $(window).off('resize', this.handleWindowResize);
    }

    handleWindowResize = () => {
        console.log('window resize');
    };

    render() {
        return (
            <Layout activeNav="/">
                <Banner src="/static/image/banner1.jpg" alt="首页">
                    <p>首页</p>
                </Banner>
            </Layout>
        );
    }
}