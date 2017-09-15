import React from 'react';
import Layout from '../../components/Layout.js';
import style from './style';
import Banner from '../../components/banner/Banner';

export default () => (
    <Layout activeNav="/about">
        <style jsx>{style}</style>
        <Banner src="/static/image/banner.png" alt="关于">
            <p>关于</p>
        </Banner>
    </Layout>
);
