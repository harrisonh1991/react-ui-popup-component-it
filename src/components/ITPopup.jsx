import React from 'react';
import PopupMenu from 'react-ui-popup';
import { CookieGet } from 'js_cookie_lib'

import '../../src/index.css';

const ITPopupMenu = props => {

    const { eventLabel, eventCategory } = props;

    function startFunc(props){
        const available = getVisiable() !== '0';
        if(available){
            GTATrack('view');
        }
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
        else if(window.dataLayer)
            window.dataLayer.push({
                'event': action,
                'event_category' : eventCategory,
                'event_label' : eventLabel
            })
    }

    return <PopupMenu hoverFunc={hoverFunc} startFunc={startFunc} closeFunc={closeFunc} enterFunc={enterFunc}  {...props}>
        {props.children}
    </PopupMenu>
}

export default ITPopupMenu;