import React from 'react';
import Layout from '../../components/Layout.js';
import style from './style';
import aboutPng from '../../static/about.png';

export default () => (
    <Layout activeNav="/production">
        <style jsx>{style}</style>
        <div style={{paddingTop: '100px', textAlign: 'center'}}>
            <img src={aboutPng} alt="关于"/>
        </div>
    </Layout>
);
