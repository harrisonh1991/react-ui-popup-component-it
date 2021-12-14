import React, { useRef, useEffect, useState } from 'react';
import PopupMenu from 'react-ui-popup';
import '../../src/index.css';

const ITPopupMenu = props => {

    const { eventLabel, eventCategory } = props;
    const refPopup = useRef(null);
    const [width, setWidth] = useState(-1);

    useEffect(() => {
        console.log('hiihihih')

        window.addEventListener('resize', function(){
            console.log('update width')
            setWidth(window.innerWidth);
        })
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

    return <PopupMenu {...props} refPopup={refPopup} hoverFunc={hoverFunc} startFunc={startFunc} closeFunc={closeFunc} enterFunc={enterFunc}>{props.children}</PopupMenu>
}

export default ITPopupMenu;