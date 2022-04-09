/**
 * Name : save
 * Author : Md Tazri
 * Date : 9 April 2022
 * Description : Here click to save whole document as pdf
 * 
 */

import hideButton from "./pannel-button"

let saveButton = document.createElement("button");
saveButton.className = "save-button"
saveButton.innerText = "SAVE";

saveButton.addEventListener("click",event=>{
    (async function(){
        await hideButton.click();
        window.print();
    })()
})

export default saveButton;