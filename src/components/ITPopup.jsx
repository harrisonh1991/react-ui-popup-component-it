import React, { useRef, useEffect, useState } from 'react';
import PopupMenu from 'react-ui-popup';
import { CookieGet } from 'js_cookie_lib'
import gettscodeParameter from 'get-url-parameter';

import '../../src/index.css';

const ITPopupMenu = props => {

    const { eventLabel, eventCategory, tscodeParameter } = props;
    const refPopup = useRef(null);
    const [width, setWidth] = useState(-1);
    const [parameter, setParameter] = useState('');

    useEffect(() => {
        window.addEventListener('resize', function(){
            setWidth(window.innerWidth);
        })

        var tscode = gettscodeParameter(window.location.href, 'tscode') || '';
        console.log(`tscode: ${tscode} | isvalid: ${tscode !== ''}`);
        if(tscode === ''){
            tscode = CookieGet('tscode');
            console.log(`cookie tscode: ${tscode} | isvalid: ${tscode !== ''}`);
        }

        if(tscode === ''){
            tscode = tscodeParameter;
            console.log(`parameter tscode: ${tscode} | isvalid: ${tscode !== ''}`);
        }

        if(tscode !== ''){
            var para = new URLSearchParams();
            para.append('tscode', tscode);
            setParameter(para.toString())
        }
    }, [])

    useEffect(() => {
        if(!refPopup)
            return;
        var _height = refPopup.current.clientHeight;
        document.querySelector('.back-to-top').style.bottom = _height + 'px';
    }, [width])
    
    function startFunc(props){
        const { isVisiable } = props;

        var body = document.querySelector("body");

        if(!isVisiable)
            return body.classList.remove("hp_sm_popup_menu_body");

        body.classList.add("hp_sm_popup_menu_body");
        GTATrack('view');
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
    }

    function GTATrack(action){
        if(window.gtag)
            window.gtag('event', action, {
                'event_category' : eventCategory,
                'event_label' : eventLabel
            });
    }

    return <PopupMenu {...props} refPopup={refPopup} hoverFunc={hoverFunc} startFunc={startFunc} closeFunc={closeFunc} enterFunc={enterFunc} href={props.href + (parameter === ''? '' : `?${parameter}`)}>
        {props.children}
    </PopupMenu>
}

ITPopupMenu.defaultProps = {
    tscodeParameter: ''
}

export default ITPopupMenu;