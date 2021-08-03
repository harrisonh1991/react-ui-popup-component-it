import React from 'react';
import PopupMenu from 'react-ui-popup-menu';

const ITPopupMenu = props => {

    const { title, eventCategory } = props;
    

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
                'event_label' : title
            });
    }

    return <PopupMenu {...props}  hoverFunc={hoverFunc} startFunc={startFunc} closeFunc={closeFunc} enterFunc={enterFunc}/>
}

ITPopupMenu.defaultProps = {
    title: 'Lorem Ipsum',
    eventCategory: 'homepage_popup'
}

export default ITPopupMenu;