/**
 * Name : panel
 * Author : Md Tazri
 * Date : 8 April 2022
 * Description : Here create panel and customize it
 * 
 */

import controlBox from "./controlBox";
import hideButton from "./pannel-button";
import saveButton from "./save";

let panel = {
    panel : document.createElement("div"),
}

// add className on panel and resizer 
panel.panel.className = "panel";

// add hideButton
panel.panel.appendChild(hideButton);
panel.panel.appendChild(controlBox.controlBox);
panel.panel.appendChild(saveButton);

Object.assign(panel.panel.style,panel.panelStyle);

export default panel