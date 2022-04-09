/**
 * Name : app-object
 * Author : Md Tazri
 * Date : 8 April 2022
 * Description : Here create the whole app object
 * 
 */

// import other js file
import allObject from "./allObject" // all application object list

// app scaffolder
const app = {
};

// object
app.object = {};
app.object.body = document.querySelector("body");


// init function
app.init = () => {
    // append all object in body
    allObject.forEach( obj => app.object.body.appendChild(obj));
}

export default app;