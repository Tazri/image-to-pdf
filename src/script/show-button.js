/**
 * Name : show-button
 * Author : Md Tazri
 * Date : 9 April 2022
 * Description : Here create a button which can show the panel on screen
 * 
 */

import panel from "./panel";

let showButton = document.createElement("div");
showButton.className = "show-button hide"
showButton.innerText = ">";

showButton.addEventListener("click",event=>{
    panel.panel.classList.remove("hide");
    showButton.classList.add("hide");
})

export default showButton