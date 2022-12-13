import ErrorScreen from "./screens/errorscreen.js";
import HomeScreen from "./screens/homescreen.js";
import LoginScreen from "./screens/loginscreen.js";
import { parseRequestUrl } from "./utils.js";

const routes ={
    "/":LoginScreen,
    "/login":LoginScreen,
    "/home":HomeScreen
}

const router = async()=>{
    const request = parseRequestUrl();
    const parsedUrl = (request.resource?`/${request.resource}`:"/")
    +(request.id?"/:id":"")
    +(request.action?`/${request.action}`:"");
    const screen = routes[parsedUrl]?routes[parsedUrl]:ErrorScreen;
    const main = document.getElementById("main");
    main.innerHTML = await screen.render();
    await screen.after_render();
}

window.addEventListener("load",router);
window.addEventListener("hashchange",router);