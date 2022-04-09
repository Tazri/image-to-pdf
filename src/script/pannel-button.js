/**
 * Name : panel-button
 * Author : Md Tazri
 * Date : 9 April 2022
 * Description : Here create panel button which is work for hide panel
 * 
 */

import showButton from "./show-button";

let hideButton = document.createElement("div");
hideButton.innerText = "<";
hideButton.className = "hide-button"

hideButton.addEventListener("click",event=>{
    hideButton.parentElement.classList.add("hide");
    showButton.classList.remove("hide");
})

export default hideButton;