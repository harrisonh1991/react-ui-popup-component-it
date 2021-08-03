# I.T Popup Component

## Extend from?
https://www.npmjs.com/package/react-ui-popup

## What is it
1. extend from react-ui-popup
2. Popup menu
3. To fix .top-back element block eachother, this package include the function to update change the style of .top-back element when popup menu exist.

## install
```
npm install react-it-popup

```

## import
```
import ITPopupMenu from 'react-it-popup';

```

```
<ITPopupMenu {...{
    title: "Lorem Ipsum",
    content: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    href: "https://www.google.com/",
    imgSrc: "https://www.hebergementwebs.com/image/bf/bf49927d9ce10f2cf967fb3a71cd55ed.jpg/crop-an-image-with-paint-powerpoint-photoshop-or-online.jpg",
    eventLabel: "${ga_campaign_name}",
    eventCategory: 'homepage_popup'
}}/>
```

## extend props
|attribute|description|type|propType|default|
|---|---|---|---|---|
|eventCategory|GA Tracking Category|string||homepage_popup|
|eventLabel|GA Tracking Lable|string||${ga_campaign_name}|