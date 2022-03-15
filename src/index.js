import React from 'react';
import ReactDOM from 'react-dom';
import ITPopupMenu from './components/ITPopup.jsx';

ReactDOM.render(
    <React.StrictMode>
        <ITPopupMenu {...{
            title: 'Lorem Ipsum',
            content: 'Enjoy membership discounts, exclusive drops and up to 15% off on selected products',
            theme: 'dark',
            background: {
                dataSets: {
                    0: {
                        src: 'https://staging-ap01-itapparels.demandware.net/on/demandware.static/-/Sites-IT-HK-Library/default/dwe2d7ce88/landingPageCreative/2022/1/w2/HK_BIT_MiniPopUp_DT_SnowPeak_ForkSet_GWP_Mockup_Bkg_v3.jpg', width: 295, height: 188
                    }
                },
                alt: 'lead generation'
            },
            href: "https://www.google.com/",
            eventLabel: "sit lead generation 20210830",
            eventCategory: 'homepage_popup',
            cookieName: 'test11234',
            ctaEnter: {
                content: 'Register Now'
            },
            classCtaClose: {
                href: 'href1',
                svg: 'svg1'
            }
        }}/>
    </React.StrictMode>,
    document.getElementById('root')
);