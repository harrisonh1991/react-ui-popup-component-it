# Popup Component

## Whats it look like?
![mb](https://user-images.githubusercontent.com/50726256/127622081-af822fe6-4397-47d4-be1b-8d25ee1ee5a6.jpg)
![dt](https://user-images.githubusercontent.com/50726256/127622085-79fd113e-bfd3-4c56-acf3-ffe905f2df20.jpg)


## install
```
install --save-dev harrison-react-popup-menu

```

## import
```
import PopupMenu from 'harrison-react-popup-menu';

```

## Configuration
|attribute|description|type|value|
|---|---|---|---|
|title| title of article| string ||
|content| content of article| sting ||
|imgSrc| image for no responsive| url ||
|imgDtSrc| image for desktop| url ||
|imgMbSrc| image for mobile| url ||
|mediaDt| what is pixal switch to desktop| string | 1024px |
|classPopup| pass your own class to update popup appearance | string | {  section: '', article: '', main: '', title: '', content: '' }|
|classCtaEnter| pass your own class to update CTA enter appearance | string | {  href: '', svg: '' }|
|classCtaClose| pass your own class to update CTA Close appearance | string | {  href: '', svg: '' }|
|theme| what theme they are | string | light, dark |

## how the layout look like?
### Popup
```
<!--section-->
<section className={[styleMd.container, classPopup.section].join(' ').trim()}>
  <!--article-->
  <Article className={[styleMd[`background--${theme}`], styleMd.popup, classPopup.article].join(' ').trim()}>
      <!--main-->
      <main className={[styleMd.main, styleMd[theme], classPopup.main].join(' ').trim()}>
          <!--title-->
          <h2 className={[styleMd.title, classPopup.title].join(' ').trim()}>{title}</h2>
           <!--Content-->
          <p className={[styleMd.content, classPopup.content].join(' ').trim()}>{content}</p>
          <CTAEnter theme={theme} className={styleMd.enter} classCustomize={classCtaEnter}/>
      </main>
      <CTAClose theme={theme} className={styleMd.close} setVisible={setVisible.bind(this)} classCustomize={classCtaClose}/>
  </Article>
</section>
```

### CTA Enter
```
<!--href-->
<a className={[styleMd.enter, styleMd[theme], className, classCustomize.href].join(' ').trim()} title={content}>
    {content}
    <!--svg-->
    <IoChevronForward className={[styleSvgMd.svg, styleMd.svg, classCustomize.svg].join(' ').trim()}/>
</a>
```

### CTA Close
```
<!--href-->
<a className={[styleMd.enter, styleMd[theme], className, classCustomize.href].join(' ').trim()} title={content}>
    {content}
    <!--svg-->
    <IoChevronForward className={[styleSvgMd.svg, styleMd.svg, classCustomize.svg].join(' ').trim()}/>
</a>
```
