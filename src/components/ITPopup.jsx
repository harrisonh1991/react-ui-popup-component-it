import React from 'react';
import PopupMenu from 'react-ui-popup-menu';

const ITPopupMenu = props => {

    const { title } = props;

    var body = document.querySelector("body");

    function startFunc(visiable){
        visiable === true? 
            body.classList.add("hp_sm_popup_menu_body"):
            body.classList.remove("hp_sm_popup_menu_body")
    }

    function enterFunc(){
        window.gtag('event', 'homepage_popup_menu', {
            'event_category' : 'popup_menu_open',
            'event_label' : title
        });
    }

    function closeFunc(){
        body.classList.remove("hp_sm_popup_menu_body");
        window.gtag('event', 'homepage_popup_menu', {
            'event_category' : 'popup_menu_close',
            'event_label' : title
        });
    }

    return <PopupMenu {...props} startFunc={startFunc} closeFunc={closeFunc} enterFunc={enterFunc}/>
}

export default ITPopupMenu;