/**
 * Name : controlBox
 * Author : Md Tazri
 * Date : 9 April 2022
 * Description : add image, padding etc
 * 
 */

import inputArea from "./inputArea";

let controlBox = document.createElement("div");

controlBox.className = "control-box"
controlBox.appendChild(inputArea.inputArea);

export default {
    input : inputArea.input,
    controlBox
};