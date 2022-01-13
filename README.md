# I.T Popup Component

## Extend from?
https://www.npmjs.com/package/react-ui-popup

## What is it
1. extend from react-ui-popup
2. Popup menu
3. have ga tracking
4. for iteshop

## install
```
npm install react-ui-it-popup
```

## import
```
import ITPopupMenu from 'react-ui-it-popup';
```

```
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
```

## extend props
|attribute|description|type|propType|default|
|---|---|---|---|---|
|background|The responsive image of background|object|{dataSets:{}}||
|eventCategory|GA Tracking Category|string||homepage_popup|
|eventLabel|GA Tracking Lable|string||${ga_campaign_name}|