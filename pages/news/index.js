import React from 'react';
import Layout from '../../components/Layout.js';
import style from './style';
import Banner from '../../components/banner/Banner';

export default () => (
    <Layout activeNav="/news">
        <style jsx>{style}</style>
        <Banner src="/static/image/banner.png" alt="新闻">
            <p>新闻</p>
        </Banner>
    </Layout>
);
