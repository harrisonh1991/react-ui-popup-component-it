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
    background: {
         dataSets: {
                0: 'https://images.unsplash.com/photo-1612404748636-568ca4155994?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2t5JTIwY2xvdWRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
                1024: 'https://media-exp1.licdn.com/dms/image/C511BAQE0NnIkjkotGA/company-background_10000/0/1541489744017?e=2159024400&v=beta&t=8CzJngJh5TrtF6_WFRYSlDeycAkT52hAfb4qLYGYnv8'
            },
            alt: 'test'
    },
    href: "https://www.google.com/",
    eventLabel: "${ga_campaign_name}",
    eventCategory: 'homepage_popup'
}}/>
```

## extend props
|attribute|description|type|propType|default|
|---|---|---|---|---|
|background|The responsive image of background|object|{dataSets:{}}||
|eventCategory|GA Tracking Category|string||homepage_popup|
|eventLabel|GA Tracking Lable|string||${ga_campaign_name}|