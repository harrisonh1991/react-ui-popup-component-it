import React from 'react';
import PopupMenu from 'harrison-react-popup-menu';

const ITPopupMenu = props => {

    var body = document.querySelector("body");

    function startFunc(visiable){
        visiable === true? 
            body.classList.add("hp_sm_popup_menu_body"):
            body.classList.remove("hp_sm_popup_menu_body")

    }

    function closeFunc(){
        body.classList.remove("hp_sm_popup_menu_body");
    }

    return <PopupMenu {...props} startFunc={startFunc} closeFunc={closeFunc}/>
}

export default ITPopupMenu;