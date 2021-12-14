import React, { useRef, useEffect, useState } from 'react';
import PopupMenu from 'react-ui-popup';
import '../../src/index.css';

const ITPopupMenu = props => {

    const { eventLabel, eventCategory } = props;
    const refPopup = useRef(null);

    useEffect(() => {
        if(!refPopup)
            return;
        console.log('ihihih')
        console.log(refPopup.current);

    }, [refPopup])
    
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

    return <PopupMenu {...props} ref={refPopup} hoverFunc={hoverFunc} startFunc={startFunc} closeFunc={closeFunc} enterFunc={enterFunc}>{props.children}</PopupMenu>
}

export default ITPopupMenu;