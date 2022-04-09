/**
 * name : inputArea
 * Author : Md Tazri
 * Date : 9 April 2022
 * Description : "Here controling image file which input from user"
 * 
 */

import board from "./board";
import controlBox from "./controlBox";

// here create input
let input = document.createElement("input");
input.type = "file";
input.multiple = true;
input.accept = "image/png, image/jpeg, image/jpg, image/webp, image/gif, image/svg";
input.style.display = "none";

// here input area
 let inputArea = document.createElement("h3");
 inputArea.innerText = "Choose the image....."
 inputArea.className = "input-area"

 inputArea.addEventListener("click",event =>{
     controlBox.input.click();
 })

 // get all file
 input.addEventListener("change",({target}) =>{ 
    if(!target.files.length){
         return;
     }

     // get all file
     let files = [];
     for(let i = 0;i < target.files.length;i++){
        let file = {
            imgFile : target.files[i],
            name : target.files[i].name
        }
        files.push(file);
     }

     // now extract the file url
     let fileNumber = 0;
     let reader = new FileReader();
     
    reader.onload = () =>{
        let img = new Image();
        img.src = reader.result;
        files[fileNumber++].img = img;
        
        if(fileNumber < files.length){
            reader.readAsDataURL(files[fileNumber].imgFile)
        }else{
            filesIsReady(files);
        }
    }
     
     reader.readAsDataURL(files[0].imgFile);
     
 })

 function filesIsReady(files){
    files.forEach(file =>{
        file.img.className = "img";
        board.appendChild(file.img);
    })
 }

 export default {inputArea,input};