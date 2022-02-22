import React, { useRef, useEffect, useState } from 'react';
import PopupMenu from 'react-ui-popup';
import { CookieGet } from 'js_cookie_lib'
import gettscodeParameter from 'get-url-parameter';

import '../../src/index.css';

const ITPopupMenu = props => {

    const { eventLabel, eventCategory, tscodeParameter } = props;
    const refPopup = useRef(null);
    const [width, setWidth] = useState(-1);
    const [url, setUrl] = useState();
    const [available, setAvailable] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', function(){
            setWidth(window.innerWidth);
        })

        var tscode = gettscodeParameter(window.location.href, 'tscode') || '';
        if(tscode === ''){
            tscode = CookieGet('tscode') || '';
        }

        if(tscode === ''){
            var para = new URLSearchParams();
            para.append('tscode', tscode);
        }

        if(tscode === '' && tscodeParameter !== ''){
            tscode = tscodeParameter;
            setUrl(props.href + '?'+ para.toString())
        }
    }, [])

    useEffect(() => {
        if(available)
            updateTopPos();
    }, [width, available])

    function updateTopPos(){
        if(!refPopup || typeof refPopup === 'undefined')
            return;
            
        if(!refPopup.current || typeof refPopup.current === 'undefined' || refPopup.current === null)
            return;
        
        var _height = refPopup.current.clientHeight || 0;
        var backToTop = document.querySelector('.back-to-top');
        backToTop && (backToTop.style.bottom = _height + 'px');
    }
    
    function startFunc(props){
        const available = getVisiable() !== '0';

        var body = document.querySelector("body");

        console.log('available')
        console.log(available);
        if(!available){
            body.classList.remove("hp_sm_popup_menu_body");
        }else{
            body.classList.add("hp_sm_popup_menu_body");
            //updateTopPos();
            GTATrack('view');
        }

        setAvailable(available);
    }

    function getVisiable(){
        return CookieGet(props.cookieName) || 1;
    }

    function hoverFunc(props){
        GTATrack('hover');
    }

    function enterFunc(props){
        GTATrack('open');
    }

    function closeFunc(){
        var body = document.querySelector("body");
        body.classList.remove("hp_sm_popup_menu_body");
        GTATrack('close');
        var backToTop = document.querySelector('.back-to-top');
        backToTop && (backToTop.style.bottom = '');
    }

    function GTATrack(action){
        if(window.gtag)
            window.gtag('event', action, {
                'event_category' : eventCategory,
                'event_label' : eventLabel
            });
    }

    return <PopupMenu refPopup={refPopup} hoverFunc={hoverFunc} startFunc={startFunc} closeFunc={closeFunc} enterFunc={enterFunc}  {...props} href={url? url: props.href}>
        {props.children}
    </PopupMenu>
}

ITPopupMenu.defaultProps = {
    tscodeParameter: ''
}

export default ITPopupMenu;