/**
 * Name : allObject
 * Author : Md Tazri
 * Date : 8 April 2022
 * Description : Here list all object and export it
 * 
 */

import board from './board';
import controlBox from './controlBox';
import panel from './panel'
import showButton from './show-button';

let objectsList = [
    board,
    panel.panel,
    showButton,
    controlBox.input
]

export default objectsList;