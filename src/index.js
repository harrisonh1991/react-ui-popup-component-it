import React from 'react';
import ReactDOM from 'react-dom';
import ITPopupMenu from './components/ITPopup.jsx';

ReactDOM.render(
    <React.StrictMode>
        <div className='back-to-top' style={{position: 'fixed', background: 'black', width: 30, height: 30}}></div>
        <ITPopupMenu {...{
            title: <span style={{fontFamily: 'HelveticaNeueLTStdHvEx, PingFangSC-Regular, "Hiragino Sans GB", 微软雅黑, "Microsoft YaHei", sans-serif'}}>Join the ITeSHOP fam!</span>,
            content: 'Enjoy membership discounts, exclusive drops and up to 15% off on selected products',
            theme: 'light',
            background: {
                dataSets: {
                    0: '//ithk-pro-itmall-resources.oss-cn-hongkong.aliyuncs.com/2/2021/8/30/16302911286271030.png'
                },
                alt: 'lead generation'
            },
            href: "https://my-hk.iteshop.com/?ts=newbies10off20210831",
            eventLabel: "sit lead generation 20210830",
            eventCategory: 'homepage_popup',
            enterLabel: 'SIGN UP',
            classCtaClose: {
                href: 'href1',
                svg: 'svg1'
            }
        }}/>
    </React.StrictMode>,
    document.getElementById('root')
);